import { motion } from "framer-motion";

export const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
    return (
      <motion.a
        href="#"
        whileHover={{ scale: 1.1, y: -5 }}
        className="bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
      >
        {icon}
      </motion.a>
    );
  };
  
  export const EmailIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#A78BFA" strokeWidth="2" />
      <path d="M2 7L12 14L22 7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  
  export const PhoneIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 2V7L12 8L9 7V2H15Z" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H9" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
  export const LocationIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#A78BFA" strokeWidth="2" />
      <path d="M12 21C16 17 20 13.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 13.4183 8 17 12 21Z" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
  
  export const FacebookIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
  export const TwitterIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
  export const InstagramIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
      <circle cx="18" cy="6" r="1" fill="white" />
    </svg>
  );
  
  export const LinkedInIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
  export const InputField = ({ 
    type, 
    label, 
    placeholder 
  }: { 
    type: string; 
    label: string; 
    placeholder: string;
  }) => {
    return (
      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">
          {label}
        </label>
        <input
          type={type}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export const KwamyaIcon = ({ className }: { className?: string }) => (
    <svg 
      className={className} 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 5L5 20L20 35L35 20L20 5Z" 
        fill="url(#grad1)" 
        stroke="url(#grad2)" 
        strokeWidth="2"
      />
      <path 
        d="M20 12L12 20L20 28L28 20L20 12Z" 
        fill="url(#grad3)" 
      />
      <defs>
        <linearGradient id="grad1" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="grad2" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <linearGradient id="grad3" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </linearGradient>
      </defs>
    </svg>
  );
  export const WebsiteIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#A78BFA" strokeWidth="2" />
      <line x1="2" y1="8" x2="22" y2="8" stroke="#A78BFA" strokeWidth="2" />
      <circle cx="5" cy="5.5" r="1" fill="#A78BFA" />
      <circle cx="8" cy="5.5" r="1" fill="#A78BFA" />
      <circle cx="11" cy="5.5" r="1" fill="#A78BFA" />
    </svg>
  );
  
  export const MobileIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="#A78BFA" strokeWidth="2" />
      <line x1="7" y1="6" x2="17" y2="6" stroke="#A78BFA" strokeWidth="2" />
      <line x1="7" y1="18" x2="17" y2="18" stroke="#A78BFA" strokeWidth="2" />
      <circle cx="12" cy="20" r="1" fill="#A78BFA" />
    </svg>
  );
  
  export const SeoIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="7" stroke="#A78BFA" strokeWidth="2" />
      <path d="M20 20L16 16" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 9L13 13" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 13L13 9" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  
  export const UiUxIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 7L7 17" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="7" cy="7" r="3" stroke="#A78BFA" strokeWidth="2" />
      <circle cx="17" cy="17" r="3" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );

  export const MaintenanceIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 7L17 10M8 15L11 18M14.5 9.5L8.5 15.5" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 21L8 17M16 17L20 21" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 7L20 3M4 3L8 7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  
  export const ConsultingIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 16V21" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 12V13" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="8" r="6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );  
  
  export const ModernIcon = () => (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 12H7L10 7L14 17L17 12H20" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
  
  export const SupportIcon = () => (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="7" r="4" stroke="#A78BFA" strokeWidth="2" />
      <path d="M5 21V19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19V21" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  export const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={false}
        animate={isOpen ? { d: "M18 6L6 18" } : { d: "M4 6H20" }}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={false}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        d="M4 12H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={false}
        animate={isOpen ? { d: "M6 6L18 18" } : { d: "M4 18H20" }}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  export const Logo = () => (
    <div className="flex items-center">
      <KwamyaIcon className="h-10 w-10 mr-2" />
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
        KWAMYA
      </span>
    </div>
  );