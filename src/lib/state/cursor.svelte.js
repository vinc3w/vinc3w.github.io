const defaults = {
  STYLE: { 
    height: 1, // rem
    width: 1,
    borderRadius: 5,
  },
  STICKY_STRENGTH: 0.1,
};

const cursor = $state({
  isHoverEffectElement: false,
  targetStyle: defaults.STYLE,
  stickyStrength: defaults.STICKY_STRENGTH,
  boundingClientRect: {
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  },
  disableMagnetism: false,
  workIndex: null,
  isImageAnimationFinished: true,
});

export function setHoverData({
  targetStyle = defaults.STYLE,
  stickyStrength = defaults.STICKY_STRENGTH,
  boundingClientRect,
  disableMagnetism,
  workIndex,
}) {
  cursor.isHoverEffectElement = true;
  cursor.targetStyle = {
    ...defaults.STYLE,
    ...targetStyle,
  };
  cursor.stickyStrength = stickyStrength;
  cursor.boundingClientRect = boundingClientRect;
  cursor.disableMagnetism = disableMagnetism;
  cursor.workIndex = workIndex;
}

export function resetHoverData() {
  cursor.isHoverEffectElement = false;
  cursor.stickyStrength = defaults.STICKY_STRENGTH
  cursor.targetStyle = defaults.STYLE;
  cursor.boundingClientRect = {
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  };
  cursor.disableMagnetism = false;
  cursor.workIndex = null;
}

export default cursor;
