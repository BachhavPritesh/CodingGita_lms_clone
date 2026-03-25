import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Menu, X, ChevronDown, Settings} from 'lucide-react';


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : {};
  const name = user?.name || "Student";
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

  const navLinks = [
    { name: 'Dashboard', path: '/student' },
    { name: 'Attendance', path: '/student/attendance' },
    { name: 'Calendar', path: '/student/calendar' },
    { name: 'Chat', path: '/student/chat-groups' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left Side: Logo & Links */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[13px] font-bold text-white">
            {initials}
          </div>
          <span className="text-white font-semibold">Student</span>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? "bg-neutral-800 text-white" 
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors duration-200 ${
                ['/student/semester-attendance', '/student/feedback', '/student/weekly-subject-feedback', '/student/apply-leave'].includes(location.pathname)
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}>
                More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-2 w-48 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl z-50">
                <div className="p-2">
                  <Link className={`w-full block text-left text-sm px-3 py-2 rounded-md transition-colors ${isActive('/student/semester-attendance') ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`} to="/student/semester-attendance">Semester Attendance</Link>
                  <Link className={`w-full block text-left text-sm px-3 py-2 rounded-md transition-colors ${isActive('/student/feedback') ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`} to="/student/feedback">Feedback</Link>
                  <Link className={`w-full block text-left text-sm px-3 py-2 rounded-md transition-colors ${isActive('/student/weekly-subject-feedback') ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`} to="/student/weekly-subject-feedback">Weekly Subject Feedback</Link>
                  <Link className={`w-full block text-left text-sm px-3 py-2 rounded-md transition-colors ${isActive('/student/apply-leave') ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`} to="/student/apply-leave">Apply Leave</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Right Side: Profile & Settings */}
        <div className="flex items-center gap-3">
          <div className="relative group hidden md:block">
            <button aria-label="Open settings" className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-5 h-5"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute right-0 mt-2 w-64 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl z-50">
              <div className="p-4 border-b border-neutral-800 flex items-center gap-3">
                <img alt="User profile" className="w-10 h-10 rounded-full object-cover" src={user.avatar || user.image || "https://avatars.githubusercontent.com/u/224962377?v=4&size=64"} />
                <div className="min-w-0">
                  <div className="text-white text-sm font-medium truncate">{name}</div>
                </div>
              </div>
              <div className="p-2">
                <Link className={`w-full block text-left text-sm px-3 py-2 rounded-md transition-colors ${isActive('/student/profile') ? 'bg-neutral-800 text-white' : 'text-neutral-200 hover:bg-neutral-800'}`} to="/student/profile">View Profile</Link>
                <button className="w-full text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800">Logout</button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-5 h-5"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
