# GitHub ve Vercel Deployment Kılavuzu

Projenizi yayına almak için aşağıdaki adımları takip edin.

### 1. GitHub Reposu Oluşturma
Bütün yerel dosya değişikliklerini (commit) tamamladık. Şimdi kodları GitHub'a göndermemiz gerekiyor.

1.  [GitHub](https://github.com/new) adresine gidin.
2.  Reponuza `serena-davet-evi` ismini verin.
3.  **Public** veya **Private** seçebilirsiniz.
4.  "Create repository" butonuna basın.

### 2. Kodları Gönderme (Push)
GitHub size bazı komutlar verecektir. Sadece şu komutları terminalde (VS Code içinde `Ctrl + ö` ile açabilirsiniz) çalıştırın:

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/serena-davet-evi.git
git branch -M main
git push -u origin main
```
*(Not: `KULLANICI_ADINIZ` yerine GitHub kullanıcı adınızı yazmayı unutmayın)*

### 3. Vercel'e Dağıtım
Kodlarınız GitHub'dayken sitenizi yayına almak çok kolaydır.

1.  [Vercel Dashboard](https://vercel.com/new) gidin.
2.  "Import Git Repository" kısmından GitHub hesabınızı bağlayın.
3.  Listede `serena-davet-evi` reposunu göreceksiniz. **Import** butonuna basın.
4.  Açılan ekranda hiçbir ayarı değiştirmeden **Deploy** butonuna basın.

Tebrikler! Siteniz 1-2 dakika içinde `https://serena-davet-evi.vercel.app` benzeri bir adreste yayında olacak.
