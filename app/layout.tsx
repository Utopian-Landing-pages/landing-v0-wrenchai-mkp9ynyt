import React from "react"
import Script from 'next/script'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'WrenchAI - AI-Powered Auto Solutions',
  description: 'Connecting vehicle owners with service providers and offering AI-powered troubleshooting. Revolutionizing vehicle care with intelligent solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Script id="utopia-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(){
  var TOKEN="5cc0a930-4d13-4923-ac60-92132618d02df4f84f7c166ae6f750fa44877e4285e4";
  var API="https://us-central1-utopia-468412.cloudfunctions.net/ingestValidationAnalytics";
  var SESSION=Math.random().toString(36).substr(2,9)+Date.now().toString(36);
  var QUEUE=[];
  var SENT=0;
  var MAX_QUEUE=50;
  var FLUSH_INTERVAL=5000;

  function getDevice(){
    var ua=navigator.userAgent;
    var w=window.innerWidth;
    return{
      type:w<768?"mobile":w<1024?"tablet":"desktop",
      browser:ua.match(/Chrome/i)?"Chrome":ua.match(/Firefox/i)?"Firefox":ua.match(/Safari/i)?"Safari":ua.match(/Edge/i)?"Edge":"Other",
      os:ua.match(/Windows/i)?"Windows":ua.match(/Mac/i)?"macOS":ua.match(/Linux/i)?"Linux":ua.match(/Android/i)?"Android":ua.match(/iOS|iPhone|iPad/i)?"iOS":"Other",
      screenWidth:screen.width,
      screenHeight:screen.height
    };
  }

  function track(type,data){
    if(QUEUE.length>=MAX_QUEUE)return;
    QUEUE.push({
      type:type,
      timestamp:new Date().toISOString(),
      sessionId:SESSION,
      pageUrl:location.href,
      referrer:document.referrer||null,
      data:data||{},
      device:getDevice()
    });
  }

  function flush(){
    if(QUEUE.length===0||SENT>0)return;
    SENT=1;
    var events=QUEUE.splice(0,50);
    fetch(API,{
      method:"POST",
      headers:{"Content-Type":"application/json","X-Tracking-Token":TOKEN},
      body:JSON.stringify({events:events}),
      keepalive:true
    }).catch(function(){}).finally(function(){SENT=0;});
  }

  // Auto-track page view
  track("page_view");

  // Track scroll depth
  var maxScroll=0;
  window.addEventListener("scroll",function(){
    var h=document.documentElement;
    var pct=Math.round((window.scrollY/(h.scrollHeight-h.clientHeight))*100);
    if(pct>maxScroll&&pct%25===0){maxScroll=pct;track("scroll_depth",{depth:pct});}
  },{passive:true});

  // Track CTA clicks
  document.addEventListener("click",function(e){
    var t=e.target.closest("button,a,[data-track]");
    if(t){
      var txt=(t.textContent||"").trim().substring(0,100);
      var id=t.id||t.getAttribute("data-track")||null;
      if(t.tagName==="BUTTON"||t.getAttribute("data-track")){
        track("cta_click",{ctaId:id,ctaText:txt});
      }
    }
  });

  // Track form submissions
  document.addEventListener("submit",function(e){
    var f=e.target;
    var formId=f.id||f.getAttribute("data-form-id")||"form";
    var formType=f.getAttribute("data-form-type")||"form_submit";
    track(formType,{formId:formId,success:true});
  });

  // Track time on page
  var startTime=Date.now();
  window.addEventListener("beforeunload",function(){
    var secs=Math.round((Date.now()-startTime)/1000);
    track("time_on_page",{seconds:secs});
    flush();
  });

  // Periodic flush
  setInterval(flush,FLUSH_INTERVAL);

  // Expose for manual tracking
  window.utopiaTrack=track;
})();` }} />
          {children}
        <Analytics />
      </body>
    </html>
  )
}
