export function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid rgba(130,69,236,0.15)" }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025{" "}
          <span style={{ color: "#8245ec" }} className="font-semibold">
            Imad Et-Tabbaa
          </span>
          . Tous droits réservés.
        </p>
        <p className="text-xs text-muted-foreground mt-1 opacity-60">
          Conçu & développé avec React, Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
