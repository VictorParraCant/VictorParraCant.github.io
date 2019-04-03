import { TweenMax, TimelineMax } from 'gsap'

const icons = [
  'fas fa-code',
  'fas fa-code-branch',
  'fas fa-laptop-code',
  'fas fa-file-code',
  'fas fa-terminal',
  'fab fa-html5',
  'fab fa-css3',
  'fab fa-node',
  'fab fa-node-js',
  'fab fa-android',
  'fab fa-apple',
  'fab fa-app-store',
  'fab fa-react',
  'fas fa-bolt',
  'fas fa-bug',
  'fas fa-cloud-download-alt',
  'fas fa-copy',
  'fas fa-desktop',
  'fab fa-dev',
  'fab fa-docker',
  'fab fa-dribble',
  'fas fa-flask',
  'fas fa-folder',
  'fab fa-github',
  'fab fa-github-alt',
  'fab fa-goolgle-play',
  'fab fa-gulp',
  'fas fa-hdd',
  'fas fa-heart',
  'fab fa-hooli',
  'fab fa-jenkins',
  'fab fa-js',
  'fas fa-keyboard',
  'fab fa-less',
  'fab fa-linux',
  'fab fa-mailchimp',
  'fas fa-mobile-alt',
  'fas fa-mug-hot',
  'fas fa-mouse-pointer',
  'far fa-paper-plane',
  'fas fa-pen',
  'fab fa-pied-piper-hat',
  'fas fa-robot',
  'fas fa-rocket',
  'fab fa-sass',
  'fas fa-save',
  'fas fa-search',
  'fas fa-server',
  'fas fa-share-alt',
  'fab fa-sketch',
  'fab fa-slack',
  'fab fa-slack-hash',
  'fab fa-table-alt',
  'fab fa-trello',
  'fab fa-vuejs',
  'fas fa-wifi'
]

icons.map(icon => {
  const num = Math.random()
  if (num >= 0.5) {
    const newIcon = document.createElement('i')
    newIcon.className = `${icon}`
    TweenMax.set(newIcon, {
      // position: 'relative',
      padding: '5px',
      fontSize: `${num * 2.5}rem`,
      color: 'rgba(0, 0, 0, 0.2)',
      zIndex: 1,
      y: `${Math.random()* 140}px`
    })
    const app = document.querySelector('#app')
    app.appendChild(newIcon)
  }
})

// divs.forEach(div => {
//   TweenMax.set(div, {
//     position: 'absolute',
//     x: `${Math.random() * window.innerWidth}px`,
//     y: `${Math.random() * window.innerHeight}px`,
//     width: 20,
//     height: 20,
//     border: '3px solid black'
//   })
//
//
// })
