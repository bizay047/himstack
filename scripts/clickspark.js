
export function initClickSpark() {
  document.addEventListener('click', function(e) {
    const spark = document.createElement('div');
    spark.className = 'click-spark';
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    document.body.appendChild(spark);
    setTimeout(() => {
      spark.remove();
    }, 400);
  });
}
