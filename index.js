const express = require('express');
const axios = require('axios');
const app = express();

// Your Builder.io API Key
const API_KEY = 'bpk-2de362b30db74da9a7cf68880f2f6517';
const MODEL_ID = 'fab0b9ba790e4a9185aff96023949da1'; // Replace with your actual model ID
const BASE_URL = 'https://builder.io/api/v1/write/unit';

// Data for Mitsubishi Electric MSZ-AP25 unit
const unitData = {
  sku: 'howick-heat-pumps-msz-ap25',
  model: 'MSZ-AP25',
  brand: 'Mitsubishi Electric',
  type: 'High Wall Split System',
  url: '/msz-ap25',
  description:
    "<p>New Zealand's quietest high wall heat pump with advanced energy efficiency and R32 refrigerant.</p>",
  price: {
    originalPrice: 1799,
    discountedPrice: 1599,
    currency: 'NZD',
    isTaxIncluded: true,
    discountPercentage: 11.1,
    validFrom: new Date(),
    tieredPricing: [{ minQuantity: 1, price: 1599 }],
  },
  images: [
    {
      Image:
        'https://www.mitsubishi-electric.co.nz/assets/images/products/69400B.png',
      AltText: 'Mitsubishi Electric MSZ-AP25',
    },
  ],
  thumbnailImage: {
    Image:
      'https://www.mitsubishi-electric.co.nz/assets/images/products/69400B.png',
    AltText: 'Mitsubishi Electric MSZ-AP25 Thumbnail',
  },
  powerCapacity: {
    coolingKw: 2.5,
    heatingKw: 3.2,
    sizeKw: 2.5,
    dehumidifyingCapacityLh: 1.3,
  },
  energyEfficiency: {
    starRating: 5.0,
    annualCoolingConsumption: 700,
    annualHeatingConsumption: 920,
  },
  smartControl: true,
  quietnessDb: 19,
  smartAssistantEnabled: true,
  colors: [{ color: 'White' }],
  remoteControlIncluded: true,
  remoteControlFeatures: [
    { category: 'Standard Remote', features: ['7-Day Programmable'] },
  ],
  additionalFeatures: [
    {
      category: 'Energy Efficiency',
      features: ['EcoCore Inverter', 'Blue Fin Coating'],
    },
  ],
  coolingOperatingRange: { minTemperature: '-10', maxTemperature: '46' },
  heatingOperatingRange: { minTemperature: '-15', maxTemperature: '24' },
  refrigerantType: 'R32',
  powerSupply: 'Single Phase 240V',
  applicationScenarios: [
    {
      name: 'Bedroom',
      description: 'Ideal for quiet environments like bedrooms',
      area: 20,
      ceilingHeight: 2.4,
      insulationQuality: 'Good',
      climateZone: 'Temperate',
      occupants: 2,
      roomFunction: 'Bedroom',
      noiseSensitivity: true,
    },
  ],
  outdoorUnitNoiseDb: 46,
  stock: 'In Stock',
  physicalAttributes: {
    indoorUnit: {
      width: 798,
      height: 299,
      depth: 219,
      weight: { value: 10.5, unit: 'kg' },
    },
    outdoorUnit: {
      width: 800,
      height: 550,
      depth: 285,
      weight: { value: 35, unit: 'kg' },
    },
  },
  productCertifications: [
    {
      name: 'Energy Star',
      link: 'https://www.energystar.gov',
      certificationBody: 'Energy Star',
      region: 'New Zealand',
    },
  ],
  warranty: [
    {
      type: 'Parts',
      durationYears: 5,
      transferable: true,
      contactInformation: {
        company: 'Mitsubishi Electric',
        phoneNumber: '0800 784 382',
        email: 'info@mitsubishi-electric.co.nz',
      },
    },
  ],
  shipping: {
    dimensions: {
      width: 800,
      height: 550,
      depth: 285,
      unit: 'mm',
    },
    weight: {
      value: 35,
      unit: 'kg',
    },
    shippingCost: 'Free',
    shippingTime: '2-5 business days',
  },
  customerReviews: {
    rating: 4.8,
    totalReviews: 52,
    reviews: [
      {
        reviewerName: 'John Doe',
        reviewText: 'Quiet and energy efficient. Perfect for my bedroom.',
        reviewRating: 5,
      },
    ],
  },
  documentation: [
    {
      url: 'https://www.mitsubishi-electric.co.nz/pdf/MSZ-AP25.pdf',
      name: 'User Manual',
      description: 'User manual for the MSZ-AP25',
      type: 'Manual',
      lastUpdated: new Date('2022-04-01'),
      fileSize: '2MB',
    },
  ],
  complianceStandards: [
    {
      name: 'Energy Star',
      region: 'New Zealand',
      description: 'Energy Star rated for efficiency',
    },
  ],
  environmentalImpact: [
    {
      feature: 'Low GWP Refrigerant',
      description: 'Uses R32 refrigerant with lower global warming potential',
    },
  ],
};

// Function to create the unit entry in Builder.io
const createUnitEntry = async () => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        modelId: MODEL_ID,
        name: unitData.brand + ' ' + unitData.model,
        data: unitData,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Unit entry created:', response.data);
  } catch (error) {
    console.error(
      'Error creating unit entry:',
      error.response ? error.response.data : error.message
    );
  }
};

// Create the unit entry when the server starts
app.listen(3000, () => {
  console.log('Server started on port 3000');
  createUnitEntry();
});
