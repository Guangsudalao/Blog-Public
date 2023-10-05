const validDomains = [
 'blog.dlya.top',
 'dev.preview.dlya.top',
 'gsdl.netlify.app',
 'gsdl.vercel.app', 
 'gsdl.pages.dev',
 'guangsudalao.github.io'
] 
try {  
 if (validDomains.indexOf(document.location.hostname +':'+ document.location.port) === -1) {
    window.location.href = 'http://blog.dlya.top';
 }
} catch(e) {}   