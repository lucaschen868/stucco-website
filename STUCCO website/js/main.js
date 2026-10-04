// Announcement banner: shown unless the visitor dismissed this banner id.
const banner = document.querySelector('.banner');
if (banner) {
  const key = 'banner-dismissed-' + banner.dataset.bannerId;
  let dismissed = false;
  try { dismissed = localStorage.getItem(key) === '1'; } catch (e) {}
  banner.hidden = dismissed;
  banner.querySelector('.banner-close').addEventListener('click', () => {
    banner.hidden = true;
    try { localStorage.setItem(key, '1'); } catch (e) {}
  });
}
