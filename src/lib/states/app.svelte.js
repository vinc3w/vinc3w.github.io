export const app = $state({
  fonts: { ready: false },
  navigation: {
    inProcess: true,
    from: null,
    to: null,
  },
  loadingTransitionMS: 1000,
  loadingDurationMS: 700,
  menu: {
    isOpen: false,
    show: false,
  },
  headerHeight: null,
});
