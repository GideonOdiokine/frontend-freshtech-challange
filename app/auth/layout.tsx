import shoppingImg from "@/public/assets/images/left-section.png";
import Image from "next/image";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen h-screen  w-full relative justify-between font-inter">
      <div className="auth-asset max-w-[480px]">
        <Image
          src={shoppingImg}
          className="w-full h-full object-left-top"
          alt="shop"
          width={1000}
          height={1000}
        />
      </div>
      {children}
    </main>
  );
}
