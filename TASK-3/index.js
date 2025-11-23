(function(){
      
      const images = [
        {src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop&crop=entropy', alt: 'Mountain lake at sunrise'},
        {src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop&crop=entropy', alt: 'Forest path in autumn'},
        {src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop&crop=entropy', alt: 'City skyline at dusk'},
        {src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop&crop=entropy', alt: 'Desert dunes and sky'},
        {src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop&crop=entropy', alt: 'Calm ocean horizon'},
     
      ];

      const slidesEl = document.getElementById('slides');
      const dotsEl = document.getElementById('dots');
      const captionEl = document.getElementById('caption');
      const viewport = document.getElementById('viewport');

      images.forEach((img, i)=>{
        const slide = document.createElement('div');
        slide.className = 'slide';
        const im = document.createElement('img');
        im.src = img.src;
        im.alt = img.alt || `Slide ${i+1}`;
        slide.appendChild(im);
        slidesEl.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.setAttribute('aria-label', `Go to slide ${i+1}`);
        dot.addEventListener('click', ()=> goTo(i));
        dotsEl.appendChild(dot);
      });

      let current = 0;
      const total = images.length;
      let timer = null;
      const intervalMs = 3000; 

      function update(){
        const offset = -current * 100;
        slidesEl.style.transform = `translateX(${offset}%)`;
   
        Array.from(dotsEl.children).forEach((d, idx)=> d.classList.toggle('active', idx===current));
        captionEl.textContent = `${images[current].alt} — (${current+1} of ${total})`;
      }

      function next(){ current = (current+1)%total; update(); }
      function prev(){ current = (current-1+total)%total; update(); }
      function goTo(i){ current = ((i%total)+total)%total; update(); resetTimer(); }

      document.getElementById('nextBtn').addEventListener('click', ()=>{ next(); resetTimer(); });
      document.getElementById('prevBtn').addEventListener('click', ()=>{ prev(); resetTimer(); });

      function startTimer(){ if(timer) clearInterval(timer); timer = setInterval(next, intervalMs); }
      function stopTimer(){ if(timer) {clearInterval(timer); timer = null;} }
      function resetTimer(){ stopTimer(); startTimer(); }

    
      viewport.addEventListener('mouseenter', ()=> stopTimer());
      viewport.addEventListener('mouseleave', ()=> startTimer());

      
      document.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight') { next(); resetTimer(); }
        if(e.key === 'ArrowLeft') { prev(); resetTimer(); }
      });


      update();
      startTimer();

    
      document.addEventListener('visibilitychange', ()=>{
        if(document.hidden) stopTimer(); else startTimer();
      });

    })();