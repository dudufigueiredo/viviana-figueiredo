export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8e8] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs tracking-wide text-[#888]">
          © {new Date().getFullYear()} Viviana Figueiredo. Todos os direitos reservados.
        </p>
        <p className="text-xs tracking-wide text-[#888]">
          Uso das imagens sujeito a autorização prévia.
        </p>
      </div>
    </footer>
  );
}
