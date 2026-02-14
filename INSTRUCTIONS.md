# Video Yükleme Talimatları

Serena Davet Evi web sitesine kendi videolarınızı eklemek için aşağıdaki adımları izleyin:

1.  **Klasör Oluşturma:**
    - Proje klasörünüzde `public` klasörünün içine `videos` adında yeni bir klasör açın.
    - Yol: `e:\Projects\Website\serena-davet-evi\public\videos\`

2.  **Video Hazırlığı:**
    - Elinizdeki 9 adet yapım aşaması videosunu **Dikey (9:16)** formatta hazırlayın.
    - Videoların boyutunun çok büyük olmamasına dikkat edin (tercihen 5-10MB altı).
    - Format: `.mp4`

3.  **İsimlendirme ve Yükleme:**
    - Videoları sırasıyla şu isimlerle kaydedip `public/videos/` klasörüne atın:
        - `day1.mp4`
        - `day2.mp4`
        - `day3.mp4`
        - ...
        - `day9.mp4`

4.  **Kod Güncellemesi:**
    - `components/Gallery.tsx` dosyasını açın.
    - `stories` dizisindeki `src` kısımlarını güncelleyin.
    - Örnek: `src: "/videos/day1.mp4"`

5.  **Galeri Fotoğrafları:**
    - "Salonumuzdan Kareler" bölümüne kendi fotoğraflarınızı eklemek için:
    - Fotoğraflarınızı `public/images/gallery/` klasörüne atın (yoksa oluşturun).
    - `components/Gallery.tsx` dosyasında `venuePhotos` dizisini güncelleyin.
    - Örnek: `src: "/images/gallery/foto1.jpg"`

6.  **Logo Ekleme:**
    - Logonuzu `public` klasörünün içine `logo.png` adıyla atın.
    - `components/Hero.tsx` dosyasında logo kodunu aktif hale getirin (yorum satırından çıkartın) veya placeholder yerine `img` etiketi kullanın.

Şu an sitede geçici videolar ve görseller kullanılmaktadır. Bu adımları tamamladığınızda kendi içerikleriniz görünecektir.
