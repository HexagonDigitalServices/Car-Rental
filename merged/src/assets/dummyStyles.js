// src/assets/dummyStyles.js
import { FaStar, FaQuoteLeft, FaCar, FaRoad, FaKey, FaMapMarkerAlt } from 'react-icons/fa';

export const navbarStyles = {
  nav: {
    base: "fixed w-full top-0 z-50 transition-all duration-300",
    scrolled: "py-2",
    notScrolled: "py-4"
  },
  floatingNav: {
    base: "bg-white/95 backdrop-blur-md w-full rounded-full shadow-lg border border-gray-200 transition-all duration-300",
    scrolled: "py-2 px-4 md:px-6",
    notScrolled: "py-3 px-5 md:px-8"
  },
  logoContainer: "flex flex-col items-center text-xl md:text-2xl lg:text-2xl leading-none",
  logoText: "font-bold tracking-wider text-gray-900",
  navLinksContainer: "hidden md:flex md:items-center md:justify-center md:flex-1",
  navLinksInner: "flex items-center space-x-2 md:space-x-4 lg:space-x-6",
  navLink: {
    base: "px-3 py-2 rounded-md text-sm font-medium transition-colors",
    active: "text-orange-600 underline underline-offset-4",
    inactive: "text-gray-700 hover:text-orange-500"
  },
  separator: "hidden md:block h-6 w-px bg-gray-300 mx-2",
  userActions: "hidden md:flex md:items-center md:justify-end md:gap-4",
  authButton: "flex items-center gap-2 cursor-pointer text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-md px-3 py-2",
  authText: "text-sm font-medium",
  mobileMenuButton: "p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300",
  mobileMenu: {
    container: "md:hidden transition-all duration-200 overflow-hidden",
    open: "max-h-[400px] opacity-100",
    closed: "max-h-0 opacity-0 pointer-events-none"
  },
  mobileMenuInner: "bg-white border-t border-gray-200 shadow-lg mt-2 rounded-b-lg mx-3",
  mobileGrid: "grid grid-cols-1 sm:grid-cols-2 gap-2",
  mobileLink: {
    base: "block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
    active: "bg-gray-50 text-orange-600",
    inactive: "text-gray-700 hover:bg-gray-50"
  },
  divider: "border-t border-gray-100 my-1",
  mobileAuthButton: "w-full flex items-center px-4 py-3 text-left rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
};



// src/assets/dummyStyles.js
// ... existing navbar styles ...

export const heroStyles = {
  container: "relative w-full lg:min-h-screen h-[600px]  bg-black overflow-hidden flex items-center justify-center",
  background: "absolute lg:pt-30 pt-45 inset-0 transform-gpu will-change-transform",
  gradientOverlay: "absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/20",
  svgContainer: "absolute inset-0 w-full h-full pointer-events-none z-40",
  ctaContainer: "relative z-10 pt-99 lg:pt-0 max-w-xl md:pt-110 w-[98%] sm:w-[62%] lg:w-[46%] mx-auto px-4",
  ctaCard: "relative rounded-2xl p-6 bg-[rgba(255,255,255,0.04)] border border-white/6 backdrop-blur-md shadow-2xl flex items-center justify-between gap-4",
  subtitle: "text-xs uppercase tracking-widest text-sky-300/70",
  title: "text-white md:text-sm text-lg sm:text-2xl font-semibold mt-1",
  description: "mt-1 text-sm text-slate-300/70",
  ctaButton: "metal-btn inline-flex items-center gap-3 px-5 py-3 rounded-lg font-medium transform-gpu hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 cursor-pointer",
  buttonText: "text-sm",
  outline: "absolute -inset-1 rounded-2xl pointer-events-none ring-1 ring-white/6"
};

// assets/dummyStyles.js
export const loginStyles = {
  pageContainer: "min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 md:px-8 text-white",
  
  animatedBackground: {
    base: "absolute inset-0 z-0 overflow-hidden",
    orb1: "absolute top-1/4 left-1/5 rounded-full blur-3xl transition-all duration-1000 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-r from-orange-400/10 to-orange-600/10",
    orb2: "absolute top-3/4 right-1/4 rounded-full blur-3xl transition-all duration-1000 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-gradient-to-r from-orange-300/10 to-orange-500/10",
    orb3: "absolute bottom-1/3 left-2/3 rounded-full blur-3xl transition-all duration-1000 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-r from-orange-200/10 to-orange-400/10"
  },
  
  backButton: "absolute top-3 left-6 z-10 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-shadow duration-300 shadow-lg hover:shadow-xl bg-white/5 text-white hover:bg-white/10",
  
  loginCard: {
    container: "w-full max-w-md sm:mt-14 z-10 transform transition-all duration-500 hover:scale-[1.02]",
    card: "relative overflow-hidden p-6 sm:p-8 rounded-3xl shadow-2xl transition-colors duration-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
    decor1: "absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-orange-400/10 to-orange-500/10 blur-2xl z-0",
    decor2: "absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-orange-300/10 to-orange-400/10 blur-2xl z-0",
    headerContainer: "relative z-10 text-center mb-6 sm:mb-8",
    logoContainer: "mx-auto mb-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center",
    logoText: "flex flex-col items-center text-xl md:text-2xl lg:text-2xl leading-none font-bold tracking-wider text-white",
    title: "text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent",
    subtitle: "mt-1 sm:mt-2 font-light tracking-wider text-xs sm:text-sm text-orange-300/60"
  },
  
  form: {
    container: "space-y-4 sm:space-y-6",
    inputContainer: "relative z-10",
    inputWrapper: "relative",
    inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-orange-300/80",
    input: "w-full pl-10 pr-3 py-3 sm:py-4 rounded-xl text-sm sm:text-base placeholder-opacity-70 border transition duration-300 focus:outline-none focus:ring-2 focus:border-transparent bg-white/5 backdrop-blur-sm text-white/90 placeholder-orange-200/40 border-white/10 focus:ring-orange-500/70",
    passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors text-orange-300/80 hover:text-orange-200/90",
    submitButton: "w-full py-3 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 relative overflow-hidden group bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white/95 hover:from-orange-600/90 hover:to-orange-700/90 focus:ring-orange-500/70",
    buttonText: "relative cursor-pointer z-10 text-sm sm:text-base",
    buttonHover: "absolute inset-0 transition-opacity duration-300 z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-400/50 to-orange-500/50"
  },
  
  signupSection: "mt-6 pt-6 border-t border-white/10 text-center text-xs sm:text-sm",
  signupText: "text-orange-200/70",
  signupButton: "inline-block mt-2 w-full cursor-pointer px-4 py-2 rounded-xl font-medium transition-transform duration-300 transform hover:-translate-y-0.5 bg-transparent border border-orange-500/50 text-orange-300/90 hover:bg-orange-500/10 hover:text-white/90"
};


// assets/dummyStyles.js
export const signupStyles = {
  pageContainer: "min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white",
  
  animatedBackground: {
    base: "absolute inset-0 z-0 overflow-hidden",
    orb1: "absolute top-[10%] sm:top-1/4 left-[5%] sm:left-1/5 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full transition-all duration-1000 bg-gradient-to-r from-orange-200/10 to-orange-400/10 blur-3xl",
    orb2: "absolute top-[75%] sm:top-3/4 right-[5%] sm:right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full transition-all duration-1000 bg-gradient-to-r from-orange-200/8 to-orange-300/8 blur-3xl",
    orb3: "absolute bottom-[15%] sm:bottom-1/3 left-[65%] sm:left-2/3 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full transition-all duration-1000 bg-gradient-to-r from-orange-100/8 to-orange-300/10 blur-3xl"
  },
  
  backButton: "absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl bg-white/5 text-white hover:bg-white/10",
  
  signupCard: {
    container: "w-full max-w-[90%] sm:max-w-md py-5 sm:py-7 mt-9 z-10 transform transition-all duration-500 hover:scale-[1.02] px-2 sm:px-4",
    card: "rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8 relative transition-all duration-500 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700",
    decor1: "absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-orange-300/10 to-orange-400/10 blur-2xl z-0",
    decor2: "absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-orange-200/8 to-orange-300/10 blur-2xl z-0",
    headerContainer: "relative z-10 text-center mb-6 sm:mb-8",
    logoContainer: "mx-auto mb-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center",
    logoText: "flex flex-col items-center text-xl md:text-2xl lg:text-2xl leading-none",
    title: "text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 md:mt-4 tracking-tight bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent",
    subtitle: "mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-light tracking-wider text-orange-300/60"
  },
  
  form: {
    container: "space-y-3 sm:space-y-4 md:space-y-5",
    inputContainer: "relative z-10",
    inputWrapper: "relative",
    inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-orange-300/80",
    input: "w-full pl-10 pr-3 py-2 sm:py-3 md:py-4 rounded-xl text-xs sm:text-sm placeholder-opacity-70 border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 bg-white/5 backdrop-blur-sm text-white/90 placeholder-orange-200/40 border-white/10 focus:ring-orange-500/70",
    passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors text-orange-300/80 hover:text-orange-200/90",
    checkbox: "h-4 w-4 sm:h-5 sm:w-5 rounded focus:ring-0 border text-orange-600 border-gray-500 bg-gray-700/30 checked:bg-orange-500/80",
    checkboxLabel: "ml-2 sm:ml-3 text-xs sm:text-sm text-orange-200/80 cursor-pointer select-none",
    checkboxLink: "font-medium text-orange-300 hover:underline",
    submitButton: "w-full py-2 sm:py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 relative overflow-hidden group bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white/95 hover:from-orange-600/90 hover:to-orange-700/90 focus:ring-orange-500/70",
    buttonText: "relative z-10 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base",
    buttonHover: "absolute inset-0 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-gradient-to-r from-orange-400/50 to-orange-500/50"
  },
  
  signinSection: "mt-2 pt-2 sm:pt-3 border-t text-center",
  signinText: "mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base text-orange-200/70",
  signinButton: "inline-block w-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-base bg-transparent border border-orange-500/50 text-orange-300/90 hover:bg-orange-500/10 hover:text-white/90"
};

// src/assets/dummyStyles.js
// ... existing styles ...

export const homeCarsStyles = {
  container: "relative w-full overflow-hidden py-16 bg-black text-gray-100 min-h-screen",
  headerContainer: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16",
  premiumBadge: "inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-4",
  premiumText: "text-sm font-medium text-amber-400",
  title: "text-4xl py-2 font-[pacifico] md:text-5xl font-bold bg-clip-text text-transparent bg-orange-400 mb-4",
  subtitle: "max-w-2xl mx-auto text-lg text-gray-400",
  grid: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",
  card: "relative rounded-2xl overflow-hidden shadow-2xl transform-gpu transition-all duration-500 ease-out group",
  priceBadge: "absolute top-40 md:top-50 lg:top-50 right-4 z-20 bg-gray-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg flex items-center",
  priceText: "bg-orange-400 bg-clip-text text-transparent",
  imageContainer: "relative h-48 sm:h-52 md:h-60 overflow-hidden",
  content: "p-6 relative z-10",
  carName: "text-xl font-bold text-white",
  carInfoContainer: "text-gray-400 flex items-center mt-1",
  carTypeBadge: "bg-gray-800 text-orange-400 px-2.5 py-1 rounded-full mr-2 text-xs font-medium",
  carYear: "text-gray-500 text-sm",
  specsGrid: "grid grid-cols-4 gap-3 my-5",
  specItem: "flex flex-col items-center",
  specIconContainer: (isHovered) => `p-2.5 rounded-xl mb-1.5 transition-all ${isHovered ? 'bg-gradient-to-r from-sky-500/10 to-teal-500/10' : 'bg-gray-800'}`,
  specIcon: (isHovered) => `w-4 h-4 ${isHovered ? 'text-orange-400' : 'text-gray-500'}`,
  specValue: "text-xs font-medium text-gray-300",
  specLabel: "text-[10px] text-gray-500 mt-0.5",
  bookButton: "metal-btn inline-flex items-center gap-3 px-5 py-3 rounded-lg font-medium transform-gpu hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 cursor-pointer",
  buttonText: "relative z-10 flex items-center",
  accentBlur: "absolute -top-1 -right-1 w-10 h-10 rounded-bl-full bg-sky-500/30 blur-xl",
  borderOverlay: "absolute inset-0 rounded-2xl border border-gray-700/50 pointer-events-none",
  placeholder: "bg-black border-2 border-gray-700 border-dashed rounded-xl w-full h-full flex items-center justify-center text-sky-500",
  cardPatterns: [
    'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-gray-900/30 to-purple-900/20',
    'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/30 to-amber-900/20',
    'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-900/30 to-rose-900/20',
    'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-gray-900/30 to-sky-900/20',
    'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-gray-900/30 to-emerald-900/20',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/30 to-amber-900/20'
  ],
  borderGradients: [
    'border-sky-500/30',
    'border-emerald-500/30',
    'border-violet-500/30',
    'border-amber-500/30',
    'border-rose-500/30',
    'border-cyan-500/30'
  ],
  cardShapes: [
    'clip-path: polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);',
    'clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);',
    'clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%);',
    'clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%, 15% 85%);',
    'clip-path: polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);',
    'clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);'
  ]
};

// assets/dummyStyles.js
// assets/dummyStyles.js
export const carDetailStyles = {
  pageContainer: "relative min-h-screen overflow-hidden py-6 px-4 sm:px-6 lg:px-8 bg-black",
  contentContainer: "relative z-10 max-w-7xl mx-auto",
  backButton: "absolute top-1 cursor-pointer left-4 p-2 bg-gray-800 rounded-full shadow hover:shadow-lg z-20 border border-gray-700 hover:bg-gray-700 transition-all",
  backButtonIcon: "text-orange-400 text-lg",
  mainLayout: "pt-12 flex flex-col lg:flex-row gap-8",
  leftColumn: "lg:w-2/3 space-y-6",
  imageCarousel: "relative rounded-2xl overflow-hidden shadow-lg border border-gray-700",
  carImage: "w-full h-64 sm:h-80 md:h-96 object-cover",
  carouselIndicators: "absolute bottom-4 right-4 flex space-x-2",
  carouselIndicator: (active) => `w-3 h-3 rounded-full ${active ? 'bg-orange-500' : 'bg-gray-500'}`,
  carName: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500",
  carPrice: "text-xl sm:text-2xl md:text-3xl font-bold text-green-400",
  pricePerDay: "text-base sm:text-lg font-normal text-gray-400",
  specsGrid: "grid grid-cols-2 sm:grid-cols-4 gap-4",
  specCard: "flex flex-col items-center bg-gray-800/60 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-700 hover:border-orange-500 transition-all",
  specIcon: "text-xl sm:text-2xl mb-2",
  specLabel: "text-xs sm:text-sm text-gray-400",
  specValue: "font-semibold text-base sm:text-lg text-white",
  aboutSection: "bg-gray-800/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 space-y-3",
  aboutTitle: "text-xl sm:text-2xl font-semibold text-white",
  aboutText: "text-gray-300 text-sm sm:text-base",
  rightColumn: "lg:w-1/3",
  bookingCard: "bg-gray-800/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700 shadow-xl space-y-4",
  bookingTitle: "text-2xl sm:text-2xl font-bold text-white",
  bookingSubtitle: "text-gray-400 text-sm",
  form: "space-y-4",
  grid2: "grid grid-cols-2 gap-3",
  formLabel: "text-xs sm:text-sm text-gray-300 mb-1",
  inputContainer: (active) => `relative rounded-lg border transition-all ${active ? 'border-orange-500' : 'border-gray-600'}`,
  inputIcon: "absolute left-3 top-2.5 text-orange-400",
  inputField: "w-full pl-10 pr-2 py-1.5 sm:py-2 bg-transparent text-gray-200 text-sm sm:text-base outline-none",
  textInputField: "w-full pl-10 pr-3 py-1.5 sm:py-2 bg-transparent text-gray-200 text-sm sm:text-base outline-none",
  priceBreakdown: "bg-gray-700/40 p-3 rounded-lg text-sm space-y-1 border border-gray-600",
  priceRow: "flex justify-between text-gray-300",
  totalRow: "border-t border-gray-600 pt-1 flex justify-between font-semibold text-white",
  submitButton: "w-full flex items-center justify-center py-2.5 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 cursor-pointer text-white font-bold hover:from-orange-400 hover:to-orange-500 transition-all group"
};

// src/assets/dummyStyles.js
// ... existing styles ...

export const testimonialStyles = {
  container: "relative bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
  innerContainer: "max-w-7xl mx-auto relative z-10",
  headerContainer: "text-center mb-16",
  badge: "inline-flex items-center px-5 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-5",
  badgeText: "text-sm font-medium text-orange-400",
  title: "text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-4 font-[pacifico]",
  accentText: "text-orange-400",
  dividerContainer: "flex justify-center items-center mb-5",
  dividerLine: "h-0.5 w-16 sm:w-20 bg-orange-600 rounded-full",
  subtitle: "text-lg text-gray-400 max-w-3xl mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-orange-400",
  cardContent: "p-6 sm:p-8 relative z-10",
  quoteIcon: "text-orange-400",
  ratingContainer: "flex",
  star: "mr-1",
  comment: "text-gray-300 italic text-lg mb-8",
  carInfo: "flex items-center mb-6 bg-gray-800/50 px-4 py-3 rounded-xl",
  carIcon: "text-orange-400 mr-3",
  carText: "font-semibold text-orange-400 text-base",
  authorContainer: "flex items-center",
  avatar: "bg-gradient-to-br from-orange-500 to-orange-700 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl",
  authorInfo: "ml-4",
  authorName: "font-bold text-white text-lg",
  authorRole: "text-orange-400 text-sm",
  decorativeCorner: "absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-700 to-orange-800 transform translate-x-6 -translate-y-6 rotate-45 opacity-30",
  patternIcon: "absolute bottom-4 right-4 text-gray-700 opacity-10",
  statsContainer: "mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden relative",
  statsGrid: "grid grid-cols-2 md:grid-cols-4 gap-8 p-8",
  statItem: "text-center",
  statValue: (color) => `text-4xl sm:text-5xl font-bold ${color} mb-2`,
  statLabel: (color) => `text-sm ${color} font-medium`,
  ctaContainer: "mt-20 text-center",
  ctaTitle: "text-3xl font-bold text-white font-[pacifico] mb-4",
  ctaText: "text-gray-400 max-w-2xl mx-auto font-[pacifico] mb-8",
  ctaButton: "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 font-[pacifico] px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20",
  bottomGradient: "absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-0",
  cardShapes: [
    "clip-path: polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%);",
    "clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%);",
    "clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%);"
  ],
  icons: [FaCar, FaRoad, FaKey, FaMapMarkerAlt],
  statColors: {
    value: ["text-cyan-400", "text-amber-400", "text-violet-400", "text-emerald-400"],
    label: ["text-cyan-200", "text-amber-200", "text-violet-200", "text-emerald-200"]
  }
};

// src/assets/dummyStyles.js
// ... existing styles ...

export const footerStyles = {
  container: "relative bg-gradient-to-b from-gray-950 to-black text-white pt-16 sm:pt-20 md:pt-24 overflow-hidden",
  topElements: "absolute top-0 left-0 w-full h-32 sm:h-40 md:h-48",
  circle1: "absolute top-0 left-1/4 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-blue-500/10 blur-3xl",
  circle2: "absolute top-0 right-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-cyan-500/10 blur-3xl",
  roadLine: "absolute top-12 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-600 to-transparent",
  innerContainer: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12",
  brandSection: "space-y-4",
  logoContainer: "flex flex-col items-center text-xl md:text-2xl lg:text-2xl leading-none",
  logoText: "font-bold tracking-wider text-white",
  description: "text-gray-400 text-sm sm:text-base",
  socialIcons: "flex space-x-3 sm:space-x-4",
  socialIcon: "w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-400 transition-colors rounded-full flex items-center justify-center text-sm sm:text-base",
  sectionTitle: "text-lg font-[pacifico] sm:text-xl font-bold mb-4 relative pb-1",
  underline: "absolute left-0 bottom-0 block h-0.5 w-12 sm:w-16 bg-orange-400",
  linkList: "space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base",
  linkItem: "flex items-center hover:text-orange-400 transition-colors",
  bullet: "w-2 h-2 bg-orange-400 rounded-full mr-2",
  contactList: "space-y-3 text-gray-400 text-sm sm:text-base",
  contactItem: "flex items-start",
  contactIcon: "text-orange-400 mt-1 mr-2",
  hoursContainer: "mt-4 sm:mt-6",
  hoursTitle: "font-medium text-sm sm:text-base mb-2",
  hoursText: "text-gray-400 text-xs sm:text-sm space-y-1",
  newsletterText: "text-gray-400 text-sm sm:text-base mb-3",
  input: "w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 sm:py-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white text-sm sm:text-base",
  subscribeButton: "w-full flex items-center justify-center py-2 sm:py-3 bg-orange-400 hover:from-cyan-600 hover:to-blue-700 cursor-pointer text-white font-medium rounded-lg transition-transform duration-300 transform hover:-translate-y-1 text-sm sm:text-base",
  copyright: "border-t border-gray-800 mt-10 sm:mt-12 pb-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm sm:text-base",
  designerLink: "underline text-gray-400 hover:text-purple-500"
};

// src/assets/dummyStyles.js
// ... existing styles ...

export const contactPageStyles = {
  container: "relative min-h-screen py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-950 to-black",
  diamondPattern: "absolute inset-0 opacity-9 pointer-events-none",
  floatingTriangles: "absolute inset-0 pointer-events-none",
  triangle: "absolute w-6 h-6 opacity-10",
  content: "relative z-10 pt-20 max-w-4xl mx-auto",
  titleContainer: "text-center mb-8 sm:mb-10 md:mb-12",
  title: "text-3xl font-['Pacifico'] sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-2 flex items-center justify-center",
  divider: "w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-3",
  subtitle: "text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto",
  cardContainer: "flex flex-col md:flex-row gap-6",
  infoCard: "md:w-2/5 bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-5 sm:p-6 relative overflow-hidden border border-gray-700",
  infoCardCircle1: "absolute -top-4 -right-4 w-16 h-16 bg-orange-500/10 rounded-full",
  infoCardCircle2: "absolute -bottom-4 -left-4 w-14 h-14 bg-orange-400/10 rounded-full",
  infoTitle: "text-xl sm:text-xl font-semibold text-white flex items-center",
  infoIcon: "mr-3 text-orange-400 text-lg",
  infoItemContainer: "space-y-3",
  infoItem: "flex items-start bg-gray-700/40 p-3 rounded-lg hover:bg-gray-700/60 transition-all",
  iconContainer: (color) => `p-2 rounded-md mr-3 ${color}`,
  infoLabel: "font-medium text-gray-300 text-sm sm:text-base",
  infoValue: "text-gray-400 text-xs sm:text-sm",
  offerContainer: "mt-4 bg-gradient-to-r from-orange-900/30 to-orange-800/30 p-3 rounded-lg border border-orange-500/20",
  offerIcon: "text-orange-400 mr-2",
  offerTitle: "text-gray-300 font-medium text-sm sm:text-base",
  offerText: "text-gray-400 text-xs sm:text-sm mt-1",
  formCard: "md:w-3/5 bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-5 sm:p-6 relative overflow-hidden border border-gray-700",
  formCircle1: "absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-bl-full",
  formCircle2: "absolute bottom-0 left-0 w-14 h-14 bg-orange-500/10 rounded-tr-full",
  formTitle: "text-lg sm:text-xl font-semibold text-white mb-1 flex items-center",
  formSubtitle: "text-gray-400 text-sm",
  form: "space-y-3",
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-3",
  inputContainer: "relative",
  inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center text-orange-400",
  input: (isActive) => `w-full pl-10 pr-3 py-2 bg-gray-700/50 text-white rounded-lg border ${
    isActive ? 'border-orange-500' : 'border-gray-600'
  } focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm transition-all`,
  select: (isActive) => `w-full pl-10 pr-3 py-2 bg-gray-700/50 cursor-pointer text-white rounded-lg border ${
    isActive ? 'border-orange-500' : 'border-gray-600'
  } focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm appearance-none transition-all`,
  textareaIcon: "absolute top-2.5 left-3 text-orange-400",
  textarea: (isActive) => `w-full pl-10 pr-3 py-2 bg-gray-700/50 text-white rounded-lg border ${
    isActive ? 'border-orange-500' : 'border-gray-600'
  } focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm transition-all`,
  submitButton: "w-full cursor-pointer flex items-center justify-center py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 rounded-lg text-white font-medium text-sm shadow-md transition-all transform hover:-translate-y-0.5 group mt-2",
  whatsappIcon: "ml-2 text-lg transform group-hover:scale-110 transition-transform"
};

// assets/dummyStyles.js
export const carPageStyles = {
  pageContainer: "relative min-h-screen py-8 pt-12 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-950 to-black",
  contentContainer: "relative z-10 max-w-7xl mx-auto",
  headerContainer: "text-center mb-10 sm:mb-12 pt-13 md:mb-16",
  headerDecoration: "absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-rose-500",
  title: "relative text-3xl sm:text-4xl md:text-5xl font-bold mb-2 z-10 font-['Pacifico'] bg-orange-400 bg-clip-text text-transparent",
  subtitle: "text-slate-400 max-w-2xl mx-auto text-sm sm:text-base",
  gridContainer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10",
  carCard: "group relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
  glowEffect: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
  imageContainer: "relative h-48 sm:h-52 md:h-56 overflow-hidden",
  carImage: "w-full h-full object-cover transition-transform duration-500",
  priceBadge: "absolute bottom-3 left-3 bg-orange-400 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-lg",
  cardContent: "p-4 sm:p-5 md:p-6",
  headerRow: "flex justify-between items-center mb-4",
  carName: "text-lg sm:text-xl font-bold text-white",
  carType: "text-sm text-orange-400",
  specsGrid: "grid grid-cols-2 gap-3 mb-5 text-sm text-slate-300",
  specItem: "flex items-center space-x-2",
  specIconContainer: "bg-slate-700 p-1.5 rounded-lg",
  bookButton: "metal-btn inline-flex items-center gap-3 px-5 py-3 rounded-lg font-medium transform-gpu hover:scale-[1.03] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 cursor-pointer",
  buttonText: "group-hover:tracking-wider transition-all",
  buttonIcon: "ml-3 h-4 w-4 transition-transform group-hover:translate-x-1",
  decor1: "absolute -top-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-r from-sky-500/10 to-teal-500/10 blur-3xl z-0",
  decor2: "absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-amber-500/10 to-rose-500/10 blur-3xl z-0"
};


// src/assets/dummyStyles.js
export const myBookingsStyles = {
  // Page container
  pageContainer: "min-h-screen bg-gradient-to-b pt-40 from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8",
  
  // Title
  title: "text-3xl sm:text-4xl pb-3 md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500",
  subtitle: "text-gray-400 max-w-2xl mx-auto",
  
  // Filter buttons
  filterButton: (isActive, type) => {
    const base = "px-4 py-2 rounded-full flex items-center gap-2 transition-all";
    if (!isActive) return `${base} bg-gray-800 text-gray-300 hover:bg-gray-700`;
    
    switch(type) {
      case "all": return `${base} bg-orange-600 text-white`;
      case "upcoming": return `${base} bg-blue-600 text-white`;
      case "completed": return `${base} bg-green-600 text-white`;
      case "cancelled": return `${base} bg-red-600 text-white`;
      default: return base;
    }
  },
  
  // Loading spinner
  loadingSpinner: "animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500",
  
  // Error state
  errorContainer: "text-center py-8 bg-gray-800/50 rounded-2xl border border-gray-700",
  errorText: "text-red-400",
  retryButton: "mt-4 px-4 py-2 bg-orange-600 rounded-lg text-white",
  
  // Empty state
  emptyState: "text-center py-16 bg-gray-800/50 rounded-2xl border border-gray-700",
  emptyIconContainer: "mx-auto w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-6",
  emptyIcon: "text-4xl text-orange-500",
  emptyTitle: "text-2xl font-semibold mb-2",
  emptyText: "text-gray-400 max-w-md mx-auto",
  browseButton: "inline-block mt-6 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg flex items-center justify-center gap-2",
  
  // Booking card
  bookingCard: "bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform",
  cardImageContainer: "relative h-48 overflow-hidden",
  cardImage: "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
  cardContent: "p-5",
  cardHeader: "flex justify-between items-start mb-3",
  carTitle: "text-xl font-bold",
  carSubtitle: "text-gray-400",
  priceText: "text-orange-400 font-bold text-xl",
  daysText: "text-gray-500 text-sm",
  detailSection: "space-y-4 mt-2 pt-4 border-t border-gray-700",
  detailItem: "flex items-center gap-3",
  detailIcon: "w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-orange-400",
  detailLabel: "text-gray-400 text-sm",
  detailValue: "font-medium",
  cardActions: "mt-6 pt-4 border-t border-gray-700 flex gap-3",
  viewDetailsButton: "flex-1 py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center gap-2",
  bookAgainButton: "flex-1 py-2 px-4 bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center justify-center gap-2",
  
  // Stats cards
  statsCard: "bg-gray-800/50 p-6 rounded-2xl border border-gray-700",
  statsValue: (color) => `text-3xl font-bold ${color} mb-2`,
  statsLabel: "text-gray-400",
  
  // Modal
  modalOverlay: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
  modalContainer: "bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto",
  modalHeader: "flex justify-between items-center mb-6",
  modalTitle: "text-2xl font-bold flex items-center gap-2",
  modalCloseButton: "p-2 rounded-full hover:bg-gray-700 transition-colors",
  cancelButton: "px-3 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white mr-2",
  modalContent: "p-6",
  modalGrid: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
  carImageModal: "w-full h-48 object-cover rounded-xl",
  carTags: "flex flex-wrap gap-2 mt-2",
  carTag: "px-2 py-1 bg-gray-700 rounded text-sm",
  infoGrid: "mt-4 grid grid-cols-2 gap-3",
  infoLabel: "text-gray-400 text-sm",
  infoValue: "font-medium",
  priceValue: "font-medium text-orange-400",
  infoCard: "bg-gray-800/50 p-4 rounded-xl",
  infoRow: "flex justify-between mb-2",
  infoDivider: "mt-3 pt-3 border-t border-gray-700",
  modalActions: "flex gap-4",
  closeButton: "flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg",
  modalBookButton: "flex-1 py-3 px-4 bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center justify-center gap-2",
};