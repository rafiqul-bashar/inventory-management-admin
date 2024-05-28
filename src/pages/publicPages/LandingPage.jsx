import React from "react";
import Footer from "src/components/Common/PublicFooter";
import Navbar from "src/components/Common/PublicNavbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-screen overflow-y-auto">
      <div className="container">
        <main>
          <section className="bg-[#245F31] h-[80vh] text-[#E8E8E8]">
            <div>
              <h2>
                The <b>get-there</b> platform for <b>inventory</b>
              </h2>
              {/* Image */}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                vitae iste dignissimos maiores autem nisi quibusdam earum?
                Fugiat aperiam eligendi repellat, enim architecto ad minima
                omnis nobis, doloremque suscipit sint?
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
