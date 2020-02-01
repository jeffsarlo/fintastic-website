
$(window).on("load", function(){
  const clown = $('#clown')
  const clown2 = $('#clown2')
  const blue = $('#blue')
  const gold = $('#gold')
  const barb = $('#barb')

  // Clown
  const tlClown = new TimelineMax({repeat: 2})
  tlClown
    .to(clown, 25, {x: 500, y: 25, scale: 1.1, opacity: .7, ease: Power0.easeInOut})
    .to(clown, 25, {x: 1100, y: 30, scale: .9, opacity: .5, ease: Power0.easeInOut})
    .to(clown, 25, {x: 1700, y: 10, scale: 1, opacity: .6, ease: Power0.easeInOut})

  // Clown 2
  const tlClown2 = new TimelineMax({repeat: 2})
  tlClown2
    .to(clown2, 26, {delay: 48, x: 1100, y: -20, ease: Power0.easeInOut})
    .to(clown2, 18, {x: 1700, ease: Power0.easeInOut})

  // barb
  const tlBarb = new TimelineMax({repeat:2})
  tlBarb
    .to(barb, 22, {x: -300, y: -50, ease: Power0.easeInOut})
    .to(barb, 22, {x: -675, ease: Power0.easeInOut})
    .to(barb, 43, {x: -1500, ease: Power0.easeInOut})

  // Blue
  const tlBlue = new TimelineMax({repeat:2})
  tlBlue
    .to(blue, 35, {delay: 25, x: 500, y: 10, ease: Power0.easeInOut})
    .to(blue, 36, {x: 1000, y: 20, scale: .7, opacity: .4, ease: Power0.easeInOut})
    .to(blue, 39, {x: 1700, y: 20, scale: 1.2, opacity: .8, ease: Power0.easeInOut})

  // Gold
  const tlGold = new TimelineMax({repeat:2})
  tlGold
  .to(gold, 24, {delay: 35, x: -500, y: 10, ease: Power0.easeInOut})
  .to(gold, 24, {x: -1000, ease: Power0.easeInOut})
  .to(gold, 24, {x: -1700, ease: Power0.easeInOut})

})
