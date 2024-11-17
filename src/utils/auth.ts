const ADMIN_PASSWORD = 'OG@consulting2024';

export const auth = {
  isAuthenticated: false,

  login(password: string): boolean {
    if (password === ADMIN_PASSWORD) {
      this.isAuthenticated = true;
      sessionStorage.setItem('blog_auth', 'true');
      return true;
    }
    return false;
  },

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem('blog_auth');
  },

  checkAuth(): boolean {
    const isAuth = sessionStorage.getItem('blog_auth') === 'true';
    this.isAuthenticated = isAuth;
    return isAuth;
  }
};