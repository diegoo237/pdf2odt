export function startFakeProgress(toastId, toast) {
  let fakeProgress = 0;
  let intervalTime = 300;
  let timeoutId;

  function progressTimer() {
    if (fakeProgress < 0.92) {
      if (fakeProgress < 0.7) {
        fakeProgress += Math.random() * 0.02 + 0.01;
      } else {
        fakeProgress += Math.random() * 0.01;
        intervalTime += 100;
      }

      toast.update(toastId, {
        progress: fakeProgress,
        render: `Convertendo... ${Math.round(fakeProgress * 100)}%`,
      });

      timeoutId = setTimeout(progressTimer, intervalTime);
    }
  }

  progressTimer();
  return () => clearTimeout(timeoutId);
}
