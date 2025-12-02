# 🚀 Guia Completo: Configurar GitHub Pages pela Primeira Vez

## 📋 Pré-requisitos

Antes de começar, certifique-se de que:
- ✅ Seu código está no GitHub (já está: `guilhermemaron24-cpu/meu-primeiro-projeto`)
- ✅ O arquivo `index.html` está na raiz do repositório
- ✅ Você tem acesso à sua conta do GitHub

---

## 🎯 Passo a Passo Completo

### **PASSO 1: Verificar se o Código está no GitHub**

1. Abra seu navegador e acesse:
   ```
   https://github.com/guilhermemaron24-cpu/meu-primeiro-projeto
   ```

2. Verifique se você vê os arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `public/` (pasta com sua foto)

3. Se os arquivos não estiverem lá, você precisa fazer push primeiro (veja seção abaixo)

---

### **PASSO 2: Fazer Push dos Arquivos (Se necessário)**

Se seus arquivos ainda não estão no GitHub, siga estes passos:

#### **Opção A: Usando GitHub Desktop (Mais Fácil)**

1. Abra o **GitHub Desktop**
2. Se não tiver, baixe em: https://desktop.github.com/
3. Faça login com sua conta GitHub
4. Abra o repositório `meu-primeiro-projeto`
5. Você verá os arquivos modificados na lista
6. Escreva uma mensagem: "Adiciona portfólio completo"
7. Clique em **"Commit to main"**
8. Clique em **"Push origin"** (botão no topo)
9. Aguarde a confirmação

#### **Opção B: Usando Terminal/PowerShell**

1. Abra o **PowerShell** ou **Git Bash** na pasta do projeto
2. Execute os comandos:

```bash
# Verificar status
git status

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Adiciona portfólio completo"

# Fazer push
git push origin main
```

3. Se pedir login, use seu token de acesso pessoal do GitHub

---

### **PASSO 3: Configurar GitHub Pages**

Agora vamos configurar o GitHub Pages:

#### **3.1. Acessar as Configurações**

1. No seu repositório no GitHub, clique na aba **"Settings"** (Configurações)
   - Está no topo do repositório, ao lado de "Code", "Issues", etc.

#### **3.2. Encontrar a Seção Pages**

1. No menu lateral esquerdo, role para baixo
2. Procure por **"Pages"** (pode estar em "Code and automation")
3. Clique em **"Pages"**

   **OU** acesse diretamente:
   ```
   https://github.com/guilhermemaron24-cpu/meu-primeiro-projeto/settings/pages
   ```

#### **3.3. Configurar o Source**

Na seção **"Build and deployment"**:

1. Em **"Source"**, clique no dropdown
2. Selecione: **"Deploy from a branch"**

3. Em **"Branch"**:
   - Selecione: **"main"**
   - Em **"Folder"**, selecione: **"/ (root)"**

4. Clique no botão **"Save"** (Salvar)

#### **3.4. Aguardar a Publicação**

1. Após salvar, você verá uma mensagem amarela:
   ```
   ⚠️ Your site is ready to be published at...
   ```

2. Aguarde alguns minutos (pode levar de 1 a 10 minutos na primeira vez)

3. A mensagem mudará para verde:
   ```
   ✅ Your site is live at https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/
   ```

---

### **PASSO 4: Acessar Seu Site**

1. Após a mensagem verde aparecer, clique no link fornecido
2. Ou acesse diretamente:
   ```
   https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/
   ```

3. Seu portfólio deve aparecer! 🎉

---

## 🔍 Verificação Visual

### Como saber se está funcionando:

1. **No GitHub:**
   - Vá em **Settings > Pages**
   - Você verá: **"Your site is published at..."** (verde)
   - Há um link clicável para seu site

2. **No Navegador:**
   - Abra o link do GitHub Pages
   - Você deve ver seu portfólio funcionando
   - Todos os efeitos visuais devem estar ativos

---

## ⚠️ Solução de Problemas Comuns

### **Problema 1: "Page build failed"**

**Causa:** Erro no código HTML/CSS/JS

**Solução:**
1. Vá em **Settings > Pages**
2. Role até **"Build and deployment"**
3. Clique em **"Retry deployment"**
4. Se continuar, verifique se há erros no console do navegador (F12)

### **Problema 2: "404 Not Found"**

**Causa:** Arquivo index.html não encontrado ou caminho errado

**Solução:**
1. Verifique se `index.html` está na **raiz** do repositório (não dentro de uma pasta)
2. Verifique se o nome está correto: `index.html` (minúsculas)
3. Aguarde mais alguns minutos (pode levar até 10 minutos)

### **Problema 3: Imagens não aparecem**

**Causa:** Caminho das imagens incorreto

**Solução:**
1. Verifique se a pasta `public/` está no repositório
2. No HTML, o caminho deve ser: `public/foto curso.jpeg`
3. Certifique-se de que a imagem foi commitada

### **Problema 4: "Repository is private"**

**Causa:** Repositório privado (GitHub Pages gratuito só funciona em repositórios públicos)

**Solução:**
1. Vá em **Settings > General**
2. Role até **"Danger Zone"**
3. Clique em **"Change visibility"**
4. Selecione **"Make public"**
5. Confirme a mudança

### **Problema 5: Site não atualiza após mudanças**

**Solução:**
1. Faça push das mudanças para o GitHub
2. Aguarde 1-3 minutos
3. Limpe o cache do navegador (Ctrl + Shift + Delete)
4. Recarregue a página (Ctrl + F5)

---

## 📝 Checklist de Verificação

Antes de publicar, confirme:

- [ ] Arquivo `index.html` está na raiz do repositório
- [ ] Pasta `public/` com a foto está no repositório
- [ ] Todos os arquivos foram commitados e enviados (push)
- [ ] Repositório é **público** (não privado)
- [ ] GitHub Pages está configurado (Settings > Pages)
- [ ] Branch selecionado é **"main"**
- [ ] Folder selecionado é **"/ (root)"**

---

## 🎨 Personalizar a URL (Opcional)

Por padrão, sua URL será:
```
https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/
```

### Para ter uma URL mais curta:

1. Vá em **Settings > General**
2. Role até **"Repository name"**
3. Renomeie para algo mais curto (ex: `portfolio`)
4. Clique em **"Rename"**
5. A nova URL será: `https://guilhermemaron24-cpu.github.io/portfolio/`

**⚠️ Atenção:** Isso mudará a URL do repositório também!

---

## 🔄 Atualizar o Site no Futuro

Sempre que fizer mudanças:

1. **Faça as alterações** nos arquivos locais
2. **Commit e Push:**
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push origin main
   ```
3. **Aguarde 1-3 minutos**
4. **Recarregue o site** (Ctrl + F5 para limpar cache)

---

## 📱 Compartilhar Seu Portfólio

Depois de publicado, você pode compartilhar:

- **Link direto:** `https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/`
- **Adicione no seu perfil do GitHub:**
  1. Vá em seu perfil do GitHub
  2. Clique em **"Edit profile"**
  3. Adicione o link no campo **"Website"**

---

## 🎉 Pronto!

Seu portfólio estará online e acessível para qualquer pessoa!

**URL do seu site:**
```
https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/
```

---

## 📞 Precisa de Ajuda?

Se algo não funcionar:

1. Verifique o arquivo `INSTRUCOES_GITHUB_PAGES.md` para mais detalhes
2. Consulte a documentação oficial: https://docs.github.com/en/pages
3. Verifique se há erros no console do navegador (F12)

---

**Última atualização:** 02/12/2025
**Status:** ✅ Guia completo para primeira configuração

