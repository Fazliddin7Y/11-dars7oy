// components/ErrorBoundary.js
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Xatolik sodir bo‘lsa, error state'ni yangilash
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Xatolikni log qilish (masalan, serverga yuborish)
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Biror narsa noto‘g‘ri bo‘ldi.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
