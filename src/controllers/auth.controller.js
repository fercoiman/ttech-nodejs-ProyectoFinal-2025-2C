import { authService } from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar que se proporcionen las credenciales
    if (!email || !password) {
      return res.status(400).json({
        error: "Datos inválidos",
        message: "email y password son obligatorios",
      });
    }

    const result = await authService.login(email, password);

    res.status(200).json({
      message: "Login exitoso",
      token: result.token,
      tokenType: "Bearer",
      user: result.user,
    });
  } catch (error) {
    console.error("Error en login:", error);
    if (error.message === "Credenciales inválidas") {
      res.status(401).json({
        error: "Error de autenticación",
        message: error.message,
      });
    } else {
      res.status(500).json({
        error: "Error en el servidor",
        message: error.message,
      });
    }
  }
};

