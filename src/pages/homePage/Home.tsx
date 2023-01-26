import React from "react";
import ImageGallery from "react-image-gallery";
import LandingBanner from "../../components/landingBanner/LandingBanner";
import styles from './homePage.module.css'
type Props = {};

export default function Home({}: Props) {
  return (
    <LandingBanner />
  );
}
