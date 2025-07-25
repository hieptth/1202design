import Image from "next/image";

function Logo() {
  return (
    <Image
      src={"/assets/logo.png"}
      alt="1202 Design Studio Logo"
      width={180}
      height={36}
      className="h-7 w-35 md:h-9 md:w-45 object-cover"
    />
  );
}

export default Logo;
