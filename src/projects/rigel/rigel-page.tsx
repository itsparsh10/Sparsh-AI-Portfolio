"use client";

import { RigelNav } from "./components/rigel-ui";
import {
  RigelHero,
  RigelWhy,
  RigelIdea,
  RigelWhatIBuilt,
  RigelMemory,
  RigelEngineering,
  RigelEngineeringChallenges,
  RigelPortability,
  RigelModels,
  RigelFeatures,
  RigelTechStack,
  RigelDemonstrates,
  RigelDownload,
  RigelClosing
} from "./components/rigel-sections";
export function RigelPage() {
  return (
    <div className="rigel-page">
      <RigelNav />

      <RigelHero />
      <div className="rg-hairline" />
      <RigelWhy />
      <div className="rg-hairline" />
      <RigelIdea />
      <div className="rg-hairline" />
      <RigelWhatIBuilt />
      <div className="rg-hairline" />
      <RigelMemory />
      <div className="rg-hairline" />
      <RigelEngineering />
      <div className="rg-hairline" />
      <RigelEngineeringChallenges />
      <div className="rg-hairline" />
      <RigelPortability />
      <div className="rg-hairline" />
      <RigelModels />
      <div className="rg-hairline" />
      <RigelFeatures />
      <div className="rg-hairline" />
      <RigelTechStack />
      <div className="rg-hairline" />
      <RigelDemonstrates />
      <div className="rg-hairline" />
      <RigelDownload />
      <div className="rg-hairline" />
      <RigelClosing />
    </div>
  );
}
