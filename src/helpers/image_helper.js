// https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_1500/v1561453037/gringo-thing.jpg


const genCloudinary = (assetName, options = { q: 70, w: 1500 }) => {
  const { q, w } = options;
  return `https://res.cloudinary.com/burncartel/image/upload/c_fit,q_${q},w_${w}/v1561453037/${assetName}`
};

export {
  genCloudinary
};
