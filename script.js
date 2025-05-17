// Animate count up for stats in "Trusted by thousands" section
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat");

  stats.forEach(stat => {
    const target = +stat.getAttribute("data-target");
    const duration = 2000; // 2 seconds
    let startTime = null;

    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(
        Math.floor((progress / duration) * target),
        target
      );
      stat.textContent = formatNumber(current);
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        stat.textContent = formatNumber(target);
      }
    }

    // Format large numbers with suffixes (e.g. 500K, 21M)
    function formatNumber(num) {
      if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M+';
      if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K+';
      return num;
    }

    requestAnimationFrame(animateCount);
  });
});
