import { Easing } from '@vtex/css-handles';

type AnimationOptions = {
  duration?: number;
  easing?: string;
};

const defaultAnimationOptions: AnimationOptions = {
  duration: 500,
  easing: Easing.easeInOutCubic,
};

const animate = (type: string, target: HTMLElement | null, options: AnimationOptions = defaultAnimationOptions) => {
  if (!target) return;

  const { duration = 500, easing = Easing.easeInOutCubic } = options;

  target.style.transition = `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`;

  switch (type) {
    case 'cart-add':
      target.style.transform = 'scale(1.1)';
      target.style.opacity = '0.8';
      setTimeout(() => {
        target.style.transform = 'scale(1)';
        target.style.opacity = '1';
      }, duration);
      break;
    case 'cart-remove':
      target.style.transform = 'scale(0.9)';
      target.style.opacity = '0.5';
      setTimeout(() => {
        target.style.display = 'none';
      }, duration);
      break;
    case 'cart-update':
      target.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        target.style.transform = 'rotate(0deg)';
      }, duration);
      break;
    default:
      break;
  }
};

export { animate, defaultAnimationOptions, AnimationOptions };