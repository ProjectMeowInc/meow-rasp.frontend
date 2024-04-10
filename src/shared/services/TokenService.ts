import Cookies from "js-cookie";

export class TokenService {

    /**
     * Метод для удаления токена
     * @param name имя токена в cookies
     */
    public static removeCookie(name: string): void {
        return Cookies.remove(name)
    }

    /**
     * Метод для установки токена доступа
     * @param token токен доступа
     */
    public static setAccessToken(token: string): void {
        this.removeCookie("access_token");
        Cookies.set("access_token", token);
    }

    /**
     * Метод для получения токена доступа
     */
    public static getAccessToken(): string | undefined {
        return Cookies.get("access_token");
    }

    /**
     * Метод для установки токена обновления
     * @param refreshToken
     */
    public static setRefreshToken(refreshToken: string): void {
        this.removeCookie("refresh_token");
        Cookies.set("refresh_token", refreshToken);
    }

    /**
     * Метод для получения токена обновления
     */
    public static getRefreshToken(): string | undefined {
        return Cookies.get("refresh_token");
    }
}