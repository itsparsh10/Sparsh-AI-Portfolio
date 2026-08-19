export function SectionDivider() {
  return (
    <div className="w-full flex justify-center my-8 md:my-16 opacity-60">
      <div 
        className="w-full h-3" 
        style={{ 
          background: "url(\"data:image/svg+xml,%3Csvg width='48' height='11' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='5.5' x2='48' y2='5.5' stroke='%232d3748' stroke-width='1' /%3E%3Cline x1='24' y1='2.5' x2='24' y2='8.5' stroke='%232d3748' stroke-width='1' /%3E%3C/svg%3E\") repeat-x center" 
        }}
      ></div>
    </div>
  );
}
