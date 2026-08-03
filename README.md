# Sofra Website

Sofra Website, yemek tarifleri ve içerik paylaşımı için tasarlanmış statik bir web sitesidir. Ana sayfa, yazar profili sayfası, tarif kartları, hikâye bölümleri ve abonelik alanı içerir.

## Özellikler

- Mobil uyumlu responsive tasarım
- Tailwind CSS ile oluşturulmuş modern arayüz
- HTML bileşenleri ile tekrar kullanılabilir header/footer yapısı
- Ana sayfa ve yazar sayfası için ayrı düzenler
- Tarif kartları, hikâye kartları ve öne çıkan içerik bölümleri

## Teknoloji Yığını

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Tailwind CSS

## Proje Yapısı

- `index.html` — ana sayfa
- `author.html` — yazar profil sayfası
- `index.js` — ana sayfa dinamik içerik mantığı
- `author.js` — yazar sayfası dinamik içerik mantığı
- `components/` — header, footer ve subscribe bileşenleri
- `src/input.css` — Tailwind giriş dosyası
- `dist/output.css` — üretim CSS çıktısı

## Index.html Ekran Görüntüsü
<img width="1920" height="8174" alt="image" src="https://github.com/user-attachments/assets/be2ba94d-b541-4206-acc8-39d3634f802f" />

## Author.html Ekran Görüntüsü
<img width="1920" height="3861" alt="image" src="https://github.com/user-attachments/assets/9575a441-c943-4207-8baa-af1ea6ce932b" />


## Kurulum

Projeyi yerelde çalıştırmak için aşağıdaki adımları izleyin:

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Tailwind CSS çıktısını oluşturun:

```bash
npm run build
```

3. Yerel sunucuyu başlatın:

```bash
python -m http.server 8000
```

4. Tarayıcıda şu adrese gidin:

```text
http://localhost:8000
```

## Geliştirme Komutları

- Tailwind dosyasını izlemek için:

```bash
npm run watch
```

## GitHub'a Yükleme

Projeyi GitHub'a yüklemek istiyorsanız şu adımları izleyebilirsiniz:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push origin main
```

> Bu proje için uzak repo zaten konfigüre edilmiş durumda. Eğer farklı bir uzak repo kullanacaksanız `git remote set-url origin <github-repo-url>` komutunu kullanabilirsiniz.

## Lisans

Bu proje ISC lisansı altında dağıtılmaktadır.
