import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Calculator } from "lucide-react";
import ShaderLogo from "@/components/ShaderLogo";
import GradualBlur from "@/components/GradualBlur";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="container-custom py-3 flex justify-between items-center relative z-50">
          <div>
            <Link href="/">
              <div className="text-3xl font-bold flex items-center gap-2 relative">
                <ShaderLogo width="35px" height="35px" />
                <span className="gradient-text font-heading tracking-tighter">ЮНИК</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Button
              onClick={() => navigate("/calculator")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-md shadow-sm flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Calculator className="h-4 w-4" />
              Калькулятор дохода
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[280px] sm:w-[350px] bg-white/90 backdrop-blur-xl">
              <div className="mt-8 flex flex-col gap-8">
                <Link href="/">
                  <div className="text-3xl font-bold flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <ShaderLogo width="35px" height="35px" />
                    <span className="gradient-text font-heading tracking-tighter">ЮНИК</span>
                  </div>
                </Link>
                <div>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/calculator");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-md shadow-sm w-full flex items-center gap-2 justify-center"
                  >
                    <Calculator className="h-4 w-4" />
                    Калькулятор дохода
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <GradualBlur
          position="bottom"
          height="8rem"
          strength={3}
          divCount={10}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
    </>
  );
}
