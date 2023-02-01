const DEFAULT_THRESHOLD = 200;
class Debounce {
  private readonly threshold: number;
  private timerId?: NodeJS.Timeout | null;


  constructor(threshold = DEFAULT_THRESHOLD) {
    this.threshold = threshold;
    this.timerId = null;
  }


  use(callback: () => void) {
      const callbackRunner = () => {
        this.timerId = null;
        callback();
      };
      if (this.timerId === null) {
        this.timerId = setTimeout(callbackRunner, this.threshold);
      } else {
        clearTimeout(Number(this.timerId));
        this.timerId = setTimeout(callbackRunner, this.threshold);
      }
  }

  clear() {
      clearTimeout(Number(this.timerId));
      this.timerId = null;
  }
}

export default Debounce;
