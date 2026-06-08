import { useState } from "react";
import { user, socials, contact } from "../config";

function ContactInfo() {
  const { phone, address, email } = contact;

  if (phone || address || email) {
    return (
      <div className="grid grid-cols-1 gap-4 w-full p-4">
        {phone && <ContactItem data={phone} type="Phone" icon="fa-phone" />}
        {address && (
          <ContactItem data={address} type="Address" icon="fa-location-dot" />
        )}
        {email && (
          <ContactItem
            data={email}
            type="Email"
            icon="fa-envelope"
            link={`mailto:${email}`}
          />
        )}
      </div>
    );
  }

  return null;
}

function ContactItem({
  data,
  type,
  icon,
  link,
}: {
  data: string;
  type: string;
  icon: string;
  link?: string;
}) {
  return (
    <div className="flex items-start w-full">
      <div className="h-10 w-10 shrink-0 mr-3">
        <div className="rounded-lg p-2 text-[#ffdb70] bg-zinc-800 h-full w-full flex items-center justify-center drop-shadow-lg">
          <i className={`fas ${icon}`}></i>
        </div>
      </div>
      <div className="grow min-w-0">
        <p className="text-sm text-zinc-400">{type}</p>
        {link ? (
          <a href={link} className="text-sm md:text-base break-words">
            {data}
          </a>
        ) : (
          <p className="text-sm md:text-base break-words">{data}</p>
        )}
      </div>
    </div>
  );
}

function SocialInfo() {
  return (
    <div className="p-2 flex flex-row justify-center">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className="px-3 py-2 text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-${social.name}`}></i>
        </a>
      ))}
    </div>
  );
}

function CVModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-[#1d2021] rounded-xl shadow-xl w-full max-w-3xl h-full overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
          <h2 className="text-lg font-semibold">Resume Preview</h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="grow w-full bg-white">
          <iframe
            src={user.resumeLink}
            className="w-full h-full border-0"
            title="Resume"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </div>
        <div className="p-4 border-t border-gray-700 flex justify-end">
          <a
            href={user.resumeLink}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-sm text-white text-sm"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [showCV, setShowCV] = useState(false);

  return (
    <nav className="text-white lg:w-1/5 w-full flex justify-center z-[1000]">
      <div className="bg-zinc-900 flex flex-col items-center lg:fixed m-5 text-white rounded-3xl border border-zinc-800 lg:w-4/5 w-full max-w-xs">
        <img
          src={user.avatar}
          alt="profile"
          className="p-5 pt-10 rounded-3xl"
        />
        <div className="font-semibold text-2xl py-1 underline">{user.name}</div>
        <div className="text-xs px-4 py-2 my-2 rounded-lg bg-zinc-800">
          {user.title}
        </div>
        <hr className="w-4/5 h-px mx-auto my-3 border-0 bg-zinc-700" />
        <div className="w-4/5">
          <ContactInfo />
        </div>
        <SocialInfo />

        <button
          onClick={() => setShowCV(true)}
          className="mb-4 px-6 py-2 text-sm bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm cursor-pointer"
        >
          View CV
        </button>

        {showCV && <CVModal show={showCV} onClose={() => setShowCV(false)} />}
      </div>
    </nav>
  );
}
