import { user, socials, contact } from "./config1";

function ContactInfo(): JSX.Element | null {
  const { phone, address, email } = contact;

  if (phone || address || email) {
    return (
      <div className="grid grid-cols-1 gap-4 w-4/5 p-4">
        {phone && (
          <PhoneSection data={phone} type={"Phone"} icon="fas fa-phone" />
        )}
        {address && (
          <PhoneSection
            data={address}
            type={"Address"}
            icon="fas fa-location-dot"
          />
        )}
        {email && <EmailSection data={email} />}
      </div>
    );
  }

  return null;
}

function PhoneSection({
  data,
  type,
  icon,
}: {
  data: string;
  type: string;
  icon: string;
}) {
  return (
    <div className="flex flex-row w-full">
      <div className="rounded-lg p-4/5 flex justify-center aspect-square mr-5 flex-none">
        <div className="rounded-lg p-1 text-[#ffdb70] place-items-center grid bg-[#383839] w-full h-full drop-shadow-2xl">
          <i className={icon}></i>
        </div>
      </div>
      <div>
        <p className="text-sm text-zinc-400">{type}</p>
        <p>{data}</p>
      </div>
    </div>
  );
}

function EmailSection({ data }: { data: string }) {
  return (
    <div className="flex flex-row w-full">
      <div className="rounded-lg p-4/5 flex justify-center aspect-square mr-5 flex-none">
        <div className="rounded-lg p-1 text-[#ffdb70] place-items-center grid bg-[#383839] w-full h-full drop-shadow-2xl">
          <i className="fas fa-envelope"></i>
        </div>
      </div>
      <div>
        <p className="text-sm text-zinc-400">Address</p>
        <a href={`mailto:${data}`} className="truncate">
          {data}
        </a>
      </div>
    </div>
  );
}

function SocialInfo(): JSX.Element {
  return (
    <div className="p-5 text-2xl flex flex-row ">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className="social p-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-${social.name}`}></i>
        </a>
      ))}
    </div>
  );
}

export function Navbar(): JSX.Element {
  return (
    <nav className="text-white lg:w-1/5 w-full flex justify-center relative ">
      <div className="bg-[#1d2021] flex flex-wrap flex-col justify-center items-center lg:fixed m-10 text-white rounded-3xl border border-[#383838] lg:w-[inherit] h-fit w-full">
        <img
          src={user.image}
          alt="profilepic"
          className="w-15 h-15 p-5 pt-10 rounded-3xl"
        />
        <div className="underline text-3xl py-3">{user.name}</div>
        <div className="text-xs px-4 py-2 m-3 rounded-lg bg-[#383839]">
          {user.title}
        </div>
        <hr className="w-48 h-px mx-auto my-4 border-0 rounded md:my-5 bg-gray-700"></hr>
        <ContactInfo />
        <SocialInfo />
      </div>
    </nav>
  );
}
