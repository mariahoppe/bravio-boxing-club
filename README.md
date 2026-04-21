# BRAVIO Boxing Club — Frontend

Landing page for BRAVIO Boxing Club (Chapecó, SC).

## Estrutura

- `index.html` — página principal
- `scripts/` — módulos JS de cada seção
- `assets/` — imagens, fotos e fontes

## Rodar localmente

Por usar módulos JS (`type="module"`), é necessário servir via servidor local. Exemplos:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Depois abrir `http://localhost:8000`.

## Deploy (GitHub Pages)

1. Repo → **Settings** → **Pages**
2. Source: `main` / `(root)`
3. Salvar → site fica em `https://<usuario>.github.io/<repo>/`

## Stack

- HTML + CSS puro
- Vanilla JS (módulos ES)
- Fonte customizada: Morgen Bravio
