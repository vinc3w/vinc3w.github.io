export const app = $state({
  fonts: { ready: false },
  navigation: {
    inProcess: false,
    from: null,
    to: null,
  },
  loadingTransitionMS: 1000,
  loadingDurationMS: 1400,
  menu: {
    isOpen: false,
    show: false,
  },
});
