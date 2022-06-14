
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 2000,
    // reset: true,
})


sr.reveal(`.hero h1, .hero p, .about h1, .about p .about .btn, .work .card, .contact .start-project, .contact-page-link`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.navbar .logo,.hero .svg, .about .flex h2,  .contact h1, .about span`,{
    origin: 'left',
    interval: 100,
})

sr.reveal(`.hero .svg,.contact .svg, .about img`,{
    origin: 'right',
    interval: 100,
})
