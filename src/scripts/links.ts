///Track clicked links
declare var umami: any;
document.addEventListener('click', function (event: any) {
  const target = event.target;
  let link: string | undefined;

  if (target.tagName === 'A') {
    link = target.href;
  } else if (
    target.tagName === 'IMG' ||
    target.tagName === 'P' ||
    target.tagName === 'svg'
  ) {
    const parentLink = target.closest('a');
    if (parentLink) {
      link = parentLink.href;
    }
  }
  if (link) {
    //Register umami event
    if (typeof umami !== 'undefined') {
      umami.track('link', {
        link: link,
      });
    }
  }
});
