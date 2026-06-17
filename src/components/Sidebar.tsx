import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import ProfilePicture from '../images/omakuva.jpg';

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'resume', title: 'Resume' },
  { id: 'portfolio', title: 'Portfolio' },
  { id: 'contact', title: 'Contact' },
];

const cvUrl = `${process.env.PUBLIC_URL}/cv_janne_arkko_2025_uusi.pdf`;

const Sidebar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 rounded-lg border border-surface-600 bg-surface-800 p-2 text-white lg:hidden"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={closeMobile}
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-surface-600/50 bg-surface-900/95 backdrop-blur-md transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-1 flex-col items-center overflow-y-auto px-6 py-8">
          <img
            src={ProfilePicture}
            alt="Janne Arkko"
            className="mb-4 h-32 w-32 rounded-full border-2 border-surface-600 object-cover"
          />
          <h1 className="font-heading text-xl font-bold">Janne Arkko</h1>
          <p className="mt-1 text-center text-sm text-gray-400">
            Software Developer
          </p>
          <p className="text-center text-sm text-gray-500">
            Bachelor of IT · Fire &amp; Rescue Services
          </p>

          <div className="my-5 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/jannearkko/"
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Jannearkko"
              className="text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
          </div>

          <nav className="flex w-full flex-col space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={closeMobile}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-accent/15 text-white'
                    : 'text-gray-400 hover:bg-surface-700 hover:text-white'
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-surface-600/50 p-6">
          <a href={cvUrl} download className="block">
            <button
              type="button"
              className="btn-secondary flex w-full items-center justify-center gap-2"
            >
              <DownloadForOfflineOutlinedIcon fontSize="small" />
              Download CV
            </button>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
