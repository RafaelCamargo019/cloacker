document.addEventListener('DOMContentLoaded', () => {
 const produtos = [
        {
            id: 1,
            name: 'iPhone 15 Pro',
            price: 9999,
            category: 'smartphone',
            description: 'Smartphone premium da Apple',
            fullDescription: 'iPhone 15 Pro com chip A17 Pro, câmera de 48MP e tela Super Retina XDR.',
            stock: 50,
            image: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png',
            brand: 'Apple',
            color: 'Titânio Natural',
            weight: '187g',
            dimensions: '146.7 x 71.5 x 8.25 mm',
            processor: 'A17 Pro',
            ram: '8GB',
            storage: '256GB',
            screenSize: '6.1"',
            battery: '3200 mAh',
            os: 'iOS 17'
        },
        {
            id: 2,
            name: 'MacBook Pro 14 M3',
            price: 14999,
            category: 'notebook',
            description: 'Notebook profissional da Apple',
            fullDescription: 'MacBook Pro 14" com chip M3 Pro, 16GB de RAM e 512GB de SSD.',
            stock: 30,
            image: 'https://acronsoft.com.br/wp-content/uploads/2024/03/MacBook_Pro_14-in_M3_Pro_Space_Black_Pure_Front_Open_Screen__USEN.png',
            brand: 'Apple',
            color: 'Cinza Espacial',
            weight: '1.55kg',
            dimensions: '312.6 x 221.2 x 15.5 mm',
            processor: 'Apple M3 Pro',
            ram: '16GB',
            storage: '512GB SSD',
            screenSize: '14.2"',
            battery: '70Wh',
            os: 'macOS Sonoma'
        },
        {
            id: 3,
            name: 'iPad Pro 12.9',
            price: 12999,
            category: 'tablet',
            description: 'Tablet premium da Apple',
            fullDescription: 'iPad Pro 12.9" com chip M2, tela Liquid Retina XDR e compatibilidade com Apple Pencil.',
            stock: 40,
            image: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/ipad-air-11-inch-m2.png',
            brand: 'Apple',
            color: 'Prata',
            weight: '682g',
            dimensions: '280.6 x 214.9 x 6.4 mm',
            processor: 'Apple M2',
            ram: '8GB',
            storage: '256GB',
            screenSize: '12.9"',
            battery: '40.88Wh',
            os: 'iPadOS 17'
        },
        {
            id: 4,
            name: 'Samsung Galaxy S23 Ultra',
            price: 8999,
            category: 'smartphone',
            description: 'Smartphone premium da Samsung',
            fullDescription: 'Galaxy S23 Ultra com Snapdragon 8 Gen 2, câmera de 200MP e S Pen integrada.',
            stock: 45,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/046/792/620/small/stylish-mockup-of-s23-ultra-in-different-color-free-png.png',
            brand: 'Samsung',
            color: 'Preto',
            weight: '234g',
            dimensions: '163.4 x 78.1 x 8.9 mm',
            processor: 'Snapdragon 8 Gen 2',
            ram: '12GB',
            storage: '256GB',
            screenSize: '6.8"',
            battery: '5000 mAh',
            os: 'Android 13'
        },
        {
            id: 5,
            name: 'Dell XPS 15',
            price: 13999,
            category: 'notebook',
            description: 'Notebook premium da Dell',
            fullDescription: 'Dell XPS 15 com Intel Core i9, 32GB de RAM, 1TB de SSD e tela 4K.',
            stock: 25,
            image: 'https://www.notebookcheck.net/fileadmin/_processed_/c/4/csm_XPS_15_2_7fbc0d045e.png',
            brand: 'Dell',
            color: 'Prata',
            weight: '1.8kg',
            dimensions: '344.7 x 230 x 18 mm',
            processor: 'Intel Core i9-13900H',
            ram: '32GB',
            storage: '1TB SSD',
            screenSize: '15.6"',
            battery: '86Wh',
            os: 'Windows 11 Pro'
        },
        {
            id: 6,
            name: 'Samsung Galaxy Tab S8 Ultra',
            price: 6999,
            category: 'tablet',
            description: 'Tablet premium da Samsung',
            fullDescription: 'Samsung Galaxy Tab S8 Ultra com tela de 14.6", S Pen incluído e processador Snapdragon 8 Gen 1.',
            stock: 35,
            image: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2202/gallery/uk-galaxy-tab-s8-ultra-5g-x906-sm-x906bzaaeua-530853703?$624_624_PNG$',
            brand: 'Samsung',
            color: 'Grafite',
            weight: '728g',
            dimensions: '326.4 x 208.6 x 5.5 mm',
            processor: 'Snapdragon 8 Gen 1',
            ram: '12GB',
            storage: '256GB',
            screenSize: '14.6"',
            battery: '11200 mAh',
            os: 'Android 12'
        },
        {
            id: 7,
            name: 'AirPods Pro (2ª geração)',
            price: 1999,
            category: 'acessorio',
            description: 'Fones de ouvido sem fio da Apple',
            fullDescription: 'AirPods Pro com cancelamento ativo de ruído, áudio espacial e carregamento por MagSafe.',
            stock: 60,
            image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png',
            brand: 'Apple',
            color: 'Branco',
            weight: '5.3g (cada)',
            battery: '6h (com case 30h)',
            connectivity: 'Bluetooth 5.3'
        },
        {
            id: 8,
            name: 'PlayStation 5',
            price: 4499,
            category: 'gamer',
            description: 'Console de última geração da Sony',
            fullDescription: 'PlayStation 5 com leitor de Blu-ray, SSD ultrarrápido e controle DualSense.',
            stock: 20,
            image: 'https://cdn.awsli.com.br/2500x2500/241/241991/produto/250742196/shco-2553-41fcocoiyh.png',
            brand: 'Sony',
            color: 'Branco e Preto',
            weight: '4.5kg',
            dimensions: '390 x 260 x 104 mm',
            storage: '825GB SSD',
            gpu: 'AMD RDNA 2',
            resolution: '8K'
        },
        {
            id: 9,
            name: 'Xbox Series X',
            price: 4299,
            category: 'gamer',
            description: 'Console de última geração da Microsoft',
            fullDescription: 'Xbox Series X com 1TB SSD, 12 teraflops de poder e compatibilidade com 4K.',
            stock: 22,
            image: 'https://cdn.awsli.com.br/1258/1258259/produto/324562178/xbox-serie-x-galaxy-black-1vpk3h2o1t.png',
            brand: 'Microsoft',
            color: 'Preto',
            weight: '4.45kg',
            dimensions: '151 x 151 x 301 mm',
            storage: '1TB SSD',
            gpu: 'AMD RDNA 2',
            resolution: '8K'
        },
        {
            id: 10,
            name: 'Apple Watch Ultra',
            price: 5999,
            category: 'acessorio',
            description: 'Relógio inteligente premium da Apple',
            fullDescription: 'Apple Watch Ultra com tela Retina sempre ativa, GPS preciso e resistência para esportes radicais.',
            stock: 38,
            image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXKF3ref_VW_34FR+watch-case-49-titanium-black-ultra2_VW_34FR+watch-face-49-milanese-ultra2_VW_34FR_GEO_BR?wid=2000&hei=2000&fmt=png-alpha&.v=YzIydmRRS2pDN0FSOWdJYkhNbERrbmpDV2hhem5qNnpDenFtKzI1OXdzWjRaeVR4RW9XWXhWVHRHeXZEa3AwcGZsNDErT2hQbWVmS0VCWlVweVY1UHJPZDFtOFdYdEpGc2pnVWxteWY3dWcxYjU0WFQ4WXdVdGhrWTJkV200SUk2NU1zSk0wMm5Lb3J1eGdNV0w5L1hpVGRNc1k4UllOK1NUUTQ0eXRVbkJvblo2QXpZNEdwajdJWU5rYjMveEsremxkSWh3bThvaHltelZnekpXR2tHZw',
            brand: 'Apple',
            color: 'Titânio',
            weight: '61.3g',
            dimensions: '49 x 44 x 14.4 mm',
            battery: '36h',
            connectivity: 'Bluetooth 5.3',
            waterResistance: '100m'
        }
    ];

    // Salvar produtos no localStorage para outras funcionalidades do site
    localStorage.setItem('products', JSON.stringify(produtos));

    const themeToggle = document.getElementById('theme-toggle');
    const loginBtn = document.getElementById('login-btn');
    const cartBtn = document.getElementById('cart-btn');
    const favoritesBtn = document.getElementById('favorites-btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const compareBtn = document.getElementById('compare-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userDropdown = document.getElementById('user-dropdown');
    
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let wishlists = JSON.parse(localStorage.getItem('wishlists')) || [];
    let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    let activeCoupon = null;
    
    checkTheme();
    updateUI();
    renderProducts();
    updateCartCount();
    renderCartDropdown();
    updateCompareCount();
    renderRecentlyViewed();
    
    themeToggle.addEventListener('click', toggleTheme);
    loginBtn.addEventListener('click', toggleAuthModal);
    cartBtn.addEventListener('click', toggleCartModal);
    favoritesBtn.addEventListener('click', toggleFavoritesModal);
    searchBtn.addEventListener('click', applySearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applySearch();
    });
    categoryFilter.addEventListener('change', renderProducts);
    priceFilter.addEventListener('change', renderProducts);
    ratingFilter.addEventListener('change', renderProducts);
    clearFiltersBtn.addEventListener('click', clearFilters);
    compareBtn.addEventListener('click', toggleCompareModal);
    logoutBtn && logoutBtn.addEventListener('click', logout);
    
    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        updateThemeIcon();
    }
    
    function checkTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon();
    }
    
    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        icon.className = document.body.classList.contains('dark-theme') ? 
            'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    
    function setupAuthModal() {
        const authModal = document.getElementById('auth-modal');
        const closeBtn = authModal.querySelector('.close');
        const showRegister = document.getElementById('show-register');
        const showLogin = document.getElementById('show-login');
        
        closeBtn.addEventListener('click', () => authModal.style.display = 'none');
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('register-form').style.display = 'block';
        });
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        });
        
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
        document.getElementById('registerForm').addEventListener('submit', handleRegister);
        
        document.querySelector('.google-login').addEventListener('click', () => {
            showToast('Login com Google em desenvolvimento', 'info');
        });
        
        document.querySelector('.facebook-login').addEventListener('click', () => {
            showToast('Login com Facebook em desenvolvimento', 'info');
        });
    }
    
    function toggleAuthModal() {
        if (currentUser) {
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        } else {
            const authModal = document.getElementById('auth-modal');
            authModal.style.display = 'block';
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('register-form').style.display = 'none';
        }
    }
    
    function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            updateUI();
            document.getElementById('auth-modal').style.display = 'none';
            showToast('Login realizado com sucesso!');
            
            document.getElementById('user-name').textContent = user.name;
            document.getElementById('user-email').textContent = user.email;
        } else {
            showToast('Credenciais inválidas!', 'error');
        }
    }
    
    function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.some(u => u.email === email)) {
            showToast('E-mail já cadastrado!', 'error');
            return;
        }
        
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            isAdmin: false,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=7c3aed&color=fff`
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        showToast('Cadastro realizado com sucesso!');
        
        const defaultWishlist = {
            id: Date.now(),
            userId: newUser.id,
            name: "Minha Lista",
            products: []
        };
        wishlists.push(defaultWishlist);
        localStorage.setItem('wishlists', JSON.stringify(wishlists));
        
        document.getElementById('registerForm').reset();
        document.getElementById('show-login').click();
    }
    
    function logout() {
        currentUser = null;
        sessionStorage.removeItem('currentUser');
        updateUI();
        userDropdown.style.display = 'none';
        showToast('Logout realizado com sucesso!');
    }
    
    function renderProducts() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        const rating = ratingFilter.value;
        const searchTerm = searchInput.value.toLowerCase();
        
        // Usar o array fixo de produtos em vez do localStorage
        let filteredProducts = [...produtos];
        
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === category);
        }
        
        if (priceRange !== 'all') {
            if (priceRange === '5000+') {
                filteredProducts = filteredProducts.filter(p => p.price > 5000);
            } else {
                const [min, max] = priceRange.split('-').map(Number);
                filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
            }
        }
        
        if (rating !== 'all') {
            const minRating = parseInt(rating);
            filteredProducts = filteredProducts.filter(p => {
                const reviews = getProductReviews(p.id);
                const avgRating = calculateAverageRating(reviews);
                return avgRating >= minRating;
            });
        }
        
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(searchTerm) || 
                p.description.toLowerCase().includes(searchTerm)
            );
        }
        
        const productsGrid = document.getElementById('products');
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <button class="favorite-btn ${favorites.includes(product.id) ? 'favorited' : ''}" 
                        data-id="${product.id}">
                    <i class="${favorites.includes(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <button class="compare-btn ${compareList.includes(product.id) ? 'active' : ''}" 
                        data-id="${product.id}">
                    <i class="fa-solid fa-scale-balanced"></i>
                </button>
                <img src="${product.image}" 
                     alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${renderProductRating(product.id)}
                    <p class="product-description">${product.description || 'Descrição não disponível'}</p>
                    <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                </div>
                <div class="product-actions">
                    <button class="view-detail" data-id="${product.id}">Detalhes</button>
                    <button class="add-to-cart" data-id="${product.id}">Carrinho</button>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.view-detail').forEach(btn => {
            btn.addEventListener('click', (e) => showProductDetail(e.target.dataset.id));
        });
        
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
        });
        
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.currentTarget.dataset.id);
                toggleFavorite(productId);
            });
        });
        
        document.querySelectorAll('.compare-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.currentTarget.dataset.id);
                toggleCompare(productId);
            });
        });
        
        compareBtn.style.display = compareList.length > 0 ? 'inline-flex' : 'none';
    }
    
    function renderProductRating(productId) {
        const reviews = getProductReviews(productId);
        const avgRating = calculateAverageRating(reviews);
        const reviewCount = reviews.length;
        
        if (reviewCount === 0) {
            return '<div class="product-rating"><div class="stars"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div></div>';
        }
        
        return `
            <div class="product-rating">
                <div class="stars">
                    ${[1, 2, 3, 4, 5].map(star => `
                        <i class="${star <= avgRating ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                    `).join('')}
                </div>
                <span class="review-count">(${reviewCount})</span>
            </div>
        `;
    }
    
    function getProductReviews(productId) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        return reviews.filter(r => r.productId === productId);
    }
    
    function calculateAverageRating(reviews) {
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((total, review) => total + review.rating, 0);
        return Math.round(sum / reviews.length);
    }
    
    function showProductDetail(productId) {
        // Encontrar o produto no array fixo
        const product = produtos.find(p => p.id == productId);
        
        if (!product) return;
        
        if (!recentlyViewed.includes(productId)) {
            recentlyViewed.unshift(productId);
            if (recentlyViewed.length > 10) {
                recentlyViewed = recentlyViewed.slice(0, 10);
            }
            localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
            renderRecentlyViewed();
        }
        
        const modal = document.getElementById('product-modal');
        const content = document.getElementById('product-modal-content');
        
        const reviews = getProductReviews(productId);
        const avgRating = calculateAverageRating(reviews);
        
        content.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">
                    <img src="${product.image}" 
                         alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <h2>${product.name}</h2>
                    <div class="product-detail-rating">
                        <div class="stars">
                            ${[1, 2, 3, 4, 5].map(star => `
                                <i class="${star <= avgRating ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                            `).join('')}
                        </div>
                        <span class="view-reviews" data-id="${product.id}">(${reviews.length} avaliações)</span>
                    </div>
                    <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                    <p>${product.fullDescription || product.description || 'Descrição detalhada não disponível'}</p>
                    <p><strong>Categoria:</strong> ${getCategoryName(product.category)}</p>
                    <p><strong>Disponibilidade:</strong> ${product.stock > 0 ? 'Em estoque' : 'Esgotado'}</p>
                    
                    <div class="quantity-control">
                        <button class="quantity-decrease">-</button>
                        <input type="number" value="1" min="1" max="${product.stock || 10}" class="quantity-input">
                        <button class="quantity-increase">+</button>
                    </div>
                    
                    <button class="add-to-cart-detail" data-id="${product.id}">
                        Adicionar ao Carrinho
                    </button>
                    <button class="add-to-wishlist" data-id="${product.id}" style="margin-top: 10px;">
                        <i class="fa-regular fa-heart"></i> Adicionar à Lista de Desejos
                    </button>
                </div>
            </div>
        `;
        
        const decreaseBtn = content.querySelector('.quantity-decrease');
        const increaseBtn = content.querySelector('.quantity-increase');
        const quantityInput = content.querySelector('.quantity-input');
        
        decreaseBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) quantityInput.value = value - 1;
        });
        
        increaseBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            const max = parseInt(quantityInput.max);
            if (value < max) quantityInput.value = value + 1;
        });
        
        content.querySelector('.add-to-cart-detail').addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(product.id, quantity);
            modal.style.display = 'none';
        });
        
        content.querySelector('.add-to-wishlist').addEventListener('click', () => {
            toggleFavorite(product.id);
            if (favorites.includes(product.id)) {
                content.querySelector('.add-to-wishlist').innerHTML = '<i class="fa-solid fa-heart"></i> Adicionado aos Favoritos';
            } else {
                content.querySelector('.add-to-wishlist').innerHTML = '<i class="fa-regular fa-heart"></i> Adicionar à Lista de Desejos';
            }
        });
        
        content.querySelector('.view-reviews').addEventListener('click', () => {
            modal.style.display = 'none';
            showReviewsModal(product.id, product.name);
        });
        
        modal.style.display = 'block';
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    function getCategoryName(category) {
        const categories = {
            'smartphone': 'Smartphones',
            'notebook': 'Notebooks',
            'tablet': 'Tablets',
            'acessorio': 'Acessórios',
            'gamer': 'Gamer'
        };
        return categories[category] || category;
    }
    
    function addToCart(productId, quantity = 1) {
        // Encontrar o produto no array fixo
        const product = produtos.find(p => p.id == productId);
        
        if (!product) return;
        
        const existingItem = cart.find(item => item.id == productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        saveCart();
        updateCartCount();
        renderCartDropdown();
        showToast('Produto adicionado ao carrinho!');
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id != productId);
        saveCart();
        updateCartCount();
        renderCartDropdown();
        showToast('Produto removido do carrinho!');
    }
    
    function updateCartItemQuantity(productId, quantity) {
        const item = cart.find(item => item.id == productId);
        if (item) {
            item.quantity = quantity;
            saveCart();
            updateCartCount();
            renderCartDropdown();
        }
    }
    
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
    }
    
    function renderCartDropdown() {
        const dropdown = document.getElementById('cart-dropdown');
        
        if (cart.length === 0) {
            dropdown.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        dropdown.innerHTML = `
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <p class="cart-item-name">${item.name}</p>
                            <p class="cart-item-price">R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                        </div>
                        <button class="remove-from-cart" data-id="${item.id}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">
                <p>Total: R$ ${total.toFixed(2)}</p>
                <button id="checkout-btn">Finalizar Compra</button>
            </div>
        `;
        
        dropdown.querySelectorAll('.remove-from-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeFromCart(e.currentTarget.dataset.id);
            });
        });
        
        document.getElementById('checkout-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCheckoutModal();
        });
    }
    
    function toggleCartModal() {
        const dropdown = document.getElementById('cart-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }
    
    function toggleCheckoutModal() {
        if (cart.length === 0) {
            showToast('Seu carrinho está vazio!', 'error');
            return;
        }
        
        renderCheckoutModal();
        document.getElementById('checkout-modal').style.display = 'block';
    }
    
    function renderCheckoutModal() {
        const modal = document.getElementById('checkout-modal');
        const itemsContainer = document.getElementById('checkout-items');
        const totalElement = document.getElementById('checkout-total');
        const discountInfo = document.getElementById('discount-info');
        const discountAmount = document.getElementById('discount-amount');
        const couponMessage = document.getElementById('coupon-message');
        const installmentOptions = document.getElementById('installment-options');
        const installmentsSelect = document.getElementById('installments');
        
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let discount = 0;
        
        if (activeCoupon) {
            if (activeCoupon.type === 'percentage') {
                discount = subtotal * (activeCoupon.value / 100);
            } else {
                discount = activeCoupon.value;
            }
            
            discountInfo.style.display = 'block';
            discountAmount.textContent = `R$ ${discount.toFixed(2)}`;
            
            couponMessage.textContent = `Cupom "${activeCoupon.code}" aplicado: ${activeCoupon.type === 'percentage' ? activeCoupon.value + '%' : 'R$ ' + activeCoupon.value.toFixed(2)} de desconto`;
            couponMessage.className = 'success';
            couponMessage.style.display = 'block';
        } else {
            discountInfo.style.display = 'none';
            couponMessage.style.display = 'none';
        }
        
        const total = subtotal - discount;
        totalElement.textContent = `R$ ${total.toFixed(2)}`;
        
        itemsContainer.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <div class="checkout-item-info">
                    <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
                    <div>
                        <p class="checkout-item-name">${item.name}</p>
                        <p class="checkout-item-price">R$ ${item.price.toFixed(2)}</p>
                    </div>
                </div>
                <div class="checkout-item-quantity">
                    <button class="quantity-decrease" data-id="${item.id}">-</button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                    <button class="quantity-increase" data-id="${item.id}">+</button>
                </div>
                <p class="checkout-item-subtotal">R$ ${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-from-cart" data-id="${item.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        installmentsSelect.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            const installmentValue = total / i;
            const hasInterest = i > 6;
            const interestRate = 0.0199; // 1.99% ao mês
            const installmentWithInterest = hasInterest ? 
                installmentValue * (1 + interestRate) : installmentValue;
            
            installmentsSelect.innerHTML += `
                <option value="${i}">
                    ${i}x de R$ ${installmentWithInterest.toFixed(2)} 
                    ${hasInterest ? 'com juros' : 'sem juros'}
                </option>
            `;
        }
        
        itemsContainer.querySelectorAll('.quantity-decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                const input = itemsContainer.querySelector(`.quantity-input[data-id="${productId}"]`);
                let value = parseInt(input.value);
                if (value > 1) {
                    input.value = value - 1;
                    updateCartItemQuantity(productId, value - 1);
                    renderCheckoutModal();
                }
            });
        });
        
        itemsContainer.querySelectorAll('.quantity-increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                const input = itemsContainer.querySelector(`.quantity-input[data-id="${productId}"]`);
                let value = parseInt(input.value);
                input.value = value + 1;
                updateCartItemQuantity(productId, value + 1);
                renderCheckoutModal();
            });
        });
        
        itemsContainer.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const productId = parseInt(e.target.dataset.id);
                const newQuantity = parseInt(e.target.value);
                if (!isNaN(newQuantity)) {
                    updateCartItemQuantity(productId, newQuantity);
                }
            });
        });
        
        itemsContainer.querySelectorAll('.remove-from-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromCart(e.target.closest('button').dataset.id);
            });
        });
        
        document.getElementById('apply-coupon').addEventListener('click', () => {
            const couponCode = document.getElementById('coupon-code').value.trim();
            if (!couponCode) {
                couponMessage.textContent = 'Digite um código de cupom';
                couponMessage.className = 'error';
                couponMessage.style.display = 'block';
                return;
            }
            
            const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
            const coupon = coupons.find(c => c.code === couponCode && !c.used);
            
            if (coupon) {
                activeCoupon = coupon;
                renderCheckoutModal();
                showToast('Cupom aplicado com sucesso!');
            } else {
                couponMessage.textContent = 'Cupom inválido ou já utilizado';
                couponMessage.className = 'error';
                couponMessage.style.display = 'block';
            }
        });
        
        document.querySelectorAll('input[name="payment"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'credit') {
                    installmentOptions.style.display = 'block';
                } else {
                    installmentOptions.style.display = 'none';
                }
            });
        });
        
        document.getElementById('confirm-checkout').addEventListener('click', () => {
            if (!currentUser) {
                showToast('Faça login para finalizar a compra!', 'error');
                toggleAuthModal();
                modal.style.display = 'none';
                return;
            }
            
            const order = {
                id: Date.now(),
                userId: currentUser.id,
                items: [...cart],
                date: new Date().toISOString(),
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                discount: discount,
                couponUsed: activeCoupon ? activeCoupon.code : null,
                paymentMethod: document.querySelector('input[name="payment"]:checked').value
            };
            
            if (activeCoupon) {
                const coupons = JSON.parse(localStorage.getItem('coupons')) || [];
                const couponIndex = coupons.findIndex(c => c.code === activeCoupon.code);
                if (couponIndex !== -1) {
                    coupons[couponIndex].used = true;
                    localStorage.setItem('coupons', JSON.stringify(coupons));
                }
            }
            
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            cart = [];
            activeCoupon = null;
            saveCart();
            updateCartCount();
            renderCartDropdown();
            
            modal.style.display = 'none';
            showToast('Compra realizada com sucesso! Obrigado!', 'success');
        });
        
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    function renderRecentlyViewed() {
        const recentlyViewedList = document.getElementById('recently-viewed-list');
        if (!recentlyViewedList) return;
        
        // Usar o array fixo de produtos em vez do localStorage
        const recentProducts = recentlyViewed
            .map(id => produtos.find(p => p.id == id))
            .filter(p => p);
        
        if (recentProducts.length === 0) {
            recentlyViewedList.innerHTML = '<div class="splide__slide"><p class="empty-recent">Nenhum produto visualizado recentemente</p></div>';
            return;
        }
        
        recentlyViewedList.innerHTML = recentProducts.map(product => `
            <div class="splide__slide">
                <div class="product-card" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                    </div>
                    <div class="product-actions">
                        <button class="view-detail" data-id="${product.id}">Detalhes</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        recentlyViewedList.querySelectorAll('.view-detail').forEach(btn => {
            btn.addEventListener('click', (e) => showProductDetail(e.target.dataset.id));
        });
        
        try {
            new Splide('#recently-viewed-slider', {
                type: 'slide',
                perPage: 4,
                perMove: 1,
                gap: '20px',
                pagination: false,
                breakpoints: {
                    1200: { perPage: 3 },
                    768: { perPage: 2 },
                    480: { perPage: 1 }
                }
            }).mount();
        } catch (e) {
            console.error('Erro ao inicializar o slider:', e);
        }
    }
    
    function clearFilters() {
        categoryFilter.value = 'all';
        priceFilter.value = 'all';
        ratingFilter.value = 'all';
        searchInput.value = '';
        renderProducts();
    }
    
    function applySearch() {
        renderProducts();
    }
    
    function updateUI() {
        const adminLink = document.getElementById('admin-link');
        
        if (currentUser) {
            document.getElementById('login-btn').innerHTML = `<img src="${currentUser.avatar}" alt="${currentUser.name}" class="user-avatar-small">`;
            document.getElementById('user-avatar').src = currentUser.avatar;
            document.getElementById('user-name').textContent = currentUser.name;
            document.getElementById('user-email').textContent = currentUser.email;
            
            if (currentUser.isAdmin) {
                adminLink.style.display = 'block';
            } else {
                adminLink.style.display = 'none';
            }
        } else {
            document.getElementById('login-btn').innerHTML = '<i class="fa-solid fa-user"></i>';
            adminLink.style.display = 'none';
        }
    }
    
    function toggleFavoritesModal() {
        if (!currentUser) {
            showToast('Faça login para ver seus favoritos!', 'error');
            toggleAuthModal();
            return;
        }
        
        renderFavoritesModal();
        document.getElementById('favorites-modal').style.display = 'block';
    }
    
    function renderFavoritesModal() {
        const modal = document.getElementById('favorites-modal');
        const favoritesList = document.getElementById('favorites-list');
        const wishlistTabs = modal.querySelector('.wishlist-tabs');
        
        const userWishlists = wishlists.filter(w => w.userId === currentUser.id);
        
        wishlistTabs.innerHTML = `
            <button class="wishlist-tab active" data-list="all">Todos</button>
            ${userWishlists.map(list => `
                <button class="wishlist-tab" data-list="${list.id}">${list.name}</button>
            `).join('')}
        `;
        
        // Usar o array fixo de produtos em vez do localStorage
        let favoriteProducts = [];
        
        if (wishlistTabs.querySelector('.active').dataset.list === 'all') {
            favoriteProducts = produtos.filter(p => favorites.includes(p.id));
        } else {
            const activeListId = parseInt(wishlistTabs.querySelector('.active').dataset.list);
            const activeList = wishlists.find(w => w.id === activeListId);
            if (activeList) {
                favoriteProducts = produtos.filter(p => activeList.products.includes(p.id));
            }
        }
        
        if (favoriteProducts.length === 0) {
            favoritesList.innerHTML = '<p class="empty-favorites">Nenhum produto favorito</p>';
            return;
        }
        
        favoritesList.innerHTML = favoriteProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <button class="favorite-btn favorited" data-id="${product.id}">
                    <i class="fa-solid fa-heart"></i>
                </button>
                <button class="remove-from-wishlist" data-id="${product.id}" data-list="${wishlistTabs.querySelector('.active').dataset.list}">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${renderProductRating(product.id)}
                    <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                </div>
                <div class="product-actions">
                    <button class="view-detail" data-id="${product.id}">Detalhes</button>
                    <button class="add-to-cart" data-id="${product.id}">Carrinho</button>
                </div>
            </div>
        `).join('');
        
        wishlistTabs.querySelectorAll('.wishlist-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                wishlistTabs.querySelectorAll('.wishlist-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                renderFavoritesModal();
            });
        });
        
        document.getElementById('create-wishlist').addEventListener('click', () => {
            const listName = prompt('Digite o nome da nova lista:');
            if (listName && listName.trim()) {
                const newList = {
                    id: Date.now(),
                    userId: currentUser.id,
                    name: listName.trim(),
                    products: []
                };
                wishlists.push(newList);
                localStorage.setItem('wishlists', JSON.stringify(wishlists));
                renderFavoritesModal();
                showToast('Lista criada com sucesso!');
            }
        });
        
        favoritesList.querySelectorAll('.view-detail').forEach(btn => {
            btn.addEventListener('click', (e) => showProductDetail(e.target.dataset.id));
        });
        
        favoritesList.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
        });
        
        favoritesList.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.currentTarget.dataset.id);
                toggleFavorite(productId);
                renderFavoritesModal();
            });
        });
        
        favoritesList.querySelectorAll('.remove-from-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.id);
                const listId = parseInt(e.currentTarget.dataset.list);
                removeFromWishlist(listId, productId);
            });
        });
    }
    
    function removeFromWishlist(listId, productId) {
        const wishlist = wishlists.find(w => w.id === listId);
        if (wishlist) {
            wishlist.products = wishlist.products.filter(id => id !== productId);
            localStorage.setItem('wishlists', JSON.stringify(wishlists));
            renderFavoritesModal();
            showToast('Produto removido da lista!');
        }
    }
    
    function toggleFavorite(productId) {
        if (!currentUser) {
            showToast('Faça login para favoritar produtos!', 'error');
            toggleAuthModal();
            return;
        }
        
        const index = favorites.indexOf(productId);
        if (index === -1) {
            favorites.push(productId);
            showToast('Produto adicionado aos favoritos!');
            
            const defaultWishlist = wishlists.find(w => w.userId === currentUser.id && w.name === "Minha Lista");
            if (defaultWishlist && !defaultWishlist.products.includes(productId)) {
                defaultWishlist.products.push(productId);
                localStorage.setItem('wishlists', JSON.stringify(wishlists));
            }
        } else {
            favorites.splice(index, 1);
            showToast('Produto removido dos favoritos!');
            
            wishlists.forEach(wishlist => {
                if (wishlist.userId === currentUser.id) {
                    wishlist.products = wishlist.products.filter(id => id !== productId);
                }
            });
            localStorage.setItem('wishlists', JSON.stringify(wishlists));
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderProducts();
    }
    
    function toggleCompare(productId) {
        const index = compareList.indexOf(productId);
        if (index === -1) {
            if (compareList.length >= 4) {
                showToast('Você pode comparar no máximo 4 produtos', 'error');
                return;
            }
            compareList.push(productId);
            showToast('Produto adicionado à comparação');
        } else {
            compareList.splice(index, 1);
            showToast('Produto removido da comparação');
        }
        localStorage.setItem('compareList', JSON.stringify(compareList));
        renderProducts();
        updateCompareCount();
    }
    
    function updateCompareCount() {
        document.getElementById('compare-count').textContent = compareList.length;
    }
    
    function toggleCompareModal() {
        if (compareList.length === 0) {
            showToast('Adicione produtos para comparar', 'info');
            return;
        }
        
        renderCompareModal();
        document.getElementById('compare-modal').style.display = 'block';
    }
    
    function renderCompareModal() {
        const compareProducts = document.getElementById('compare-products');
        // Usar o array fixo de produtos em vez do localStorage
        const productsToCompare = produtos.filter(p => compareList.includes(p.id));
        
        if (productsToCompare.length === 0) {
            compareProducts.innerHTML = '<p>Nenhum produto selecionado para comparação</p>';
            return;
        }
        
        const allSpecs = new Set();
        productsToCompare.forEach(product => {
            Object.keys(product).forEach(key => {
                if (!['id', 'name', 'price', 'category', 'description', 'fullDescription', 'stock', 'image'].includes(key)) {
                    allSpecs.add(key);
                }
            });
        });
        
        const specsList = Array.from(allSpecs);
        
        compareProducts.innerHTML = `
            <table>
                <tr>
                    <th>Produto</th>
                    ${productsToCompare.map(product => `
                        <td>
                            <div class="compare-product-header">
                                <img src="${product.image}" alt="${product.name}" class="compare-product-image">
                                <h3>${product.name}</h3>
                                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                                <button class="remove-from-compare" data-id="${product.id}">Remover</button>
                            </div>
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <th>Categoria</th>
                    ${productsToCompare.map(product => `
                        <td>${getCategoryName(product.category)}</td>
                    `).join('')}
                </tr>
                <tr>
                    <th>Descrição</th>
                    ${productsToCompare.map(product => `
                        <td>${product.description}</td>
                    `).join('')}
                </tr>
                <tr>
                    <th>Disponibilidade</th>
                    ${productsToCompare.map(product => `
                        <td>${product.stock > 0 ? 'Em estoque' : 'Esgotado'}</td>
                    `).join('')}
                </tr>
                ${specsList.map(spec => `
                    <tr>
                        <th>${spec.charAt(0).toUpperCase() + spec.slice(1).replace(/([A-Z])/g, ' $1')}</th>
                        ${productsToCompare.map(product => `
                            <td>${product[spec] || '-'}</td>
                        `).join('')}
                    </tr>
                `).join('')}
            </table>
        `;
        
        compareProducts.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                addToCart(e.target.dataset.id);
            });
        });
        
        compareProducts.querySelectorAll('.remove-from-compare').forEach(btn => {
            btn.addEventListener('click', (e) => {
                toggleCompare(parseInt(e.target.dataset.id));
                renderCompareModal();
            });
        });
        
        document.getElementById('clear-comparison').addEventListener('click', () => {
            compareList = [];
            localStorage.setItem('compareList', JSON.stringify(compareList));
            updateCompareCount();
            document.getElementById('compare-modal').style.display = 'none';
            renderProducts();
        });
        
        document.getElementById('add-all-to-cart').addEventListener('click', () => {
            productsToCompare.forEach(product => {
                addToCart(product.id);
            });
            document.getElementById('compare-modal').style.display = 'none';
        });
    }
    
    function showReviewsModal(productId, productName) {
        const modal = document.getElementById('reviews-modal');
        const reviewsList = document.getElementById('reviews-list');
        const addReviewSection = document.getElementById('add-review-section');
        const reviewsProductTitle = document.getElementById('reviews-product-title');
        
        reviewsProductTitle.textContent = `Avaliações: ${productName}`;
        
        const reviews = getProductReviews(productId);
        
        if (reviews.length === 0) {
            reviewsList.innerHTML = '<p class="empty-reviews">Nenhuma avaliação para este produto</p>';
        } else {
            reviewsList.innerHTML = reviews.map(review => `
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-author">${review.userName}</span>
                        <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                    </div>
                    <div class="stars">
                        ${[1, 2, 3, 4, 5].map(star => `
                            <i class="${star <= review.rating ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                        `).join('')}
                    </div>
                    <p class="review-text">${review.text}</p>
                </div>
            `).join('');
        }
        
        if (currentUser) {
            addReviewSection.style.display = 'block';
            
            const stars = addReviewSection.querySelectorAll('.stars i');
            let selectedRating = 0;
            
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    selectedRating = parseInt(star.dataset.rating);
                    stars.forEach((s, i) => {
                        s.className = i < selectedRating ? 'fa-solid fa-star' : 'fa-regular fa-star';
                    });
                });
            });
            
            document.getElementById('submit-review').addEventListener('click', () => {
                const reviewText = document.getElementById('review-text').value.trim();
                
                if (selectedRating === 0) {
                    showToast('Selecione uma avaliação de 1 a 5 estrelas', 'error');
                    return;
                }
                
                if (!reviewText) {
                    showToast('Digite sua avaliação', 'error');
                    return;
                }
                
                const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
                
                const newReview = {
                    id: Date.now(),
                    productId: parseInt(productId),
                    userId: currentUser.id,
                    userName: currentUser.name,
                    rating: selectedRating,
                    text: reviewText,
                    date: new Date().toISOString()
                };
                
                reviews.push(newReview);
                localStorage.setItem('reviews', JSON.stringify(reviews));
                
                showToast('Avaliação enviada com sucesso!');
                showReviewsModal(productId, productName);
            });
        } else {
            addReviewSection.style.display = 'none';
        }
        
        modal.style.display = 'block';
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    function initializeData() {
        if (!localStorage.getItem('users')) {
            const defaultUsers = [
                {
                    id: 1,
                    name: 'Admin',
                    email: 'admin@exemplo.com',
                    password: 'admin123',
                    isAdmin: true,
                    avatar: 'https://ui-avatars.com/api/?name=Admin&background=7c3aed&color=fff'
                },
                {
                    id: 2,
                    name: 'Usuário Normal',
                    email: 'usuario@exemplo.com',
                    password: 'usuario123',
                    isAdmin: false,
                    avatar: 'https://ui-avatars.com/api/?name=Usuario+Normal&background=7c3aed&color=fff'
                }
            ];
            localStorage.setItem('users', JSON.stringify(defaultUsers));
        }

        if (!localStorage.getItem('reviews')) {
            const defaultReviews = [
                {
                    id: 1,
                    productId: 1,
                    userId: 2,
                    userName: 'Usuário Normal',
                    rating: 5,
                    text: 'Excelente smartphone, a câmera é incrível e a performance é imbatível.',
                    date: '2023-10-15T10:30:00Z'
                },
                {
                    id: 2,
                    productId: 1,
                    userId: 1,
                    userName: 'Admin',
                    rating: 4,
                    text: 'Muito bom, mas o preço é salgado. A bateria poderia durar mais.',
                    date: '2023-10-16T14:45:00Z'
                },
                {
                    id: 3,
                    productId: 4,
                    userId: 2,
                    userName: 'Usuário Normal',
                    rating: 5,
                    text: 'Melhor Android que já tive. A câmera de 200MP é surreal!',
                    date: '2023-10-17T09:15:00Z'
                },
                {
                    id: 4,
                    productId: 8,
                    userId: 1,
                    userName: 'Admin',
                    rating: 5,
                    text: 'O console mais poderoso do mercado. Os jogos em 4K são lindos!',
                    date: '2023-10-18T16:20:00Z'
                }
            ];
            localStorage.setItem('reviews', JSON.stringify(defaultReviews));
        }

        if (!localStorage.getItem('coupons')) {
            const defaultCoupons = [
                {
                    id: 1,
                    code: 'PRIMEIRACOMPRA',
                    type: 'percentage',
                    value: 10,
                    used: false
                },
                {
                    id: 2,
                    code: 'FRETE100',
                    type: 'fixed',
                    value: 100, 
                    used: false
                },
                {
                    id: 3,
                    code: 'BLACKFRIDAY',
                    type: 'percentage',
                    value: 20, 
                    used: false
                }
            ];
            localStorage.setItem('coupons', JSON.stringify(defaultCoupons));
        }

        if (!localStorage.getItem('wishlists')) {
            const defaultWishlists = [
                {
                    id: 1,
                    userId: 2,
                    name: "Minha Lista",
                    products: [1, 4, 8]
                }
            ];
            localStorage.setItem('wishlists', JSON.stringify(defaultWishlists));
        }

        setupAuthModal();
    }
    
    // Inicializar dados
    initializeData();
});
