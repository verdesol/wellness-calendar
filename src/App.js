import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function WellnessCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    {
      name: 'January',
      events: [
        { date: 4, title: 'World Braille Day', description: 'Vision care awareness programs' },
        { date: 10, title: 'Weight Loss Awareness Week', description: 'Weight management packages, Body composition analysis' }
      ],
      color: 'bg-blue-100'
    },
    {
      name: 'February',
      events: [
        { date: 4, title: 'World Cancer Day', description: 'Cancer prevention awareness & lifestyle workshops' },
        { date: 11, title: 'International Epilepsy Day', description: 'Awareness programs' },
        { date: 15, title: 'International Childhood Cancer Day', description: 'Special programs' }
      ],
      color: 'bg-red-100'
    },
    {
      name: 'March',
      events: [
        { date: 3, title: 'World Hearing Day', description: 'Hearing screening camps' },
        { date: 8, title: "International Women's Day", description: "Women's wellness packages & yoga sessions" },
        { date: 15, title: 'World Sleep Day', description: 'Sleep wellness programs' }
      ],
      color: 'bg-green-100'
    },
    {
      name: 'April',
      events: [
        { date: 2, title: 'World Autism Awareness Day', description: 'Special programs' },
        { date: 7, title: 'World Health Day', description: 'Comprehensive wellness packages' },
        { date: 11, title: "World Parkinson's Day", description: 'Awareness programs' }
      ],
      color: 'bg-yellow-100'
    },
    {
      name: 'May',
      events: [
        { date: 8, title: 'World Thalassemia Day', description: 'Health awareness' },
        { date: 17, title: 'World Hypertension Day', description: 'BP screening camps' },
        { date: 31, title: 'World No Tobacco Day', description: 'Smoking cessation programs' }
      ],
      color: 'bg-purple-100'
    },
    {
      name: 'June',
      events: [
        { date: 5, title: 'World Environment Day', description: 'Outdoor yoga sessions' },
        { date: 21, title: 'International Yoga Day', description: 'Special yoga & meditation camps' }
      ],
      color: 'bg-orange-100'
    },
    {
      name: 'July',
      events: [
        { date: 1, title: 'National Doctors Day', description: 'Special programs' },
        { date: 28, title: 'World Hepatitis Day', description: 'Liver health awareness' }
      ],
      color: 'bg-pink-100'
    },
    {
      name: 'August',
      events: [
        { date: 1, title: 'World Breastfeeding Week', description: 'Awareness programs' },
        { date: 12, title: 'International Youth Day', description: 'Youth fitness programs' }
      ],
      color: 'bg-teal-100'
    },
    {
      name: 'September',
      events: [
        { date: 8, title: 'World Physical Therapy Day', description: 'Posture assessment camps' },
        { date: 21, title: "World Alzheimer's Day", description: 'Mental health awareness' },
        { date: 29, title: 'World Heart Day', description: 'Cardiac fitness programs' }
      ],
      color: 'bg-indigo-100'
    },
    {
      name: 'October',
      events: [
        { date: 1, title: 'International Day for Elderly', description: 'Senior wellness packages' },
        { date: 10, title: 'World Mental Health Day', description: 'Mental wellness workshops' },
        { date: 16, title: 'World Food Day', description: 'Nutrition programs' }
      ],
      color: 'bg-red-100'
    },
    {
      name: 'November',
      events: [
        { date: 14, title: 'World Diabetes Day', description: 'Diabetes screening & counseling' },
        { date: 17, title: 'World Prematurity Day', description: 'Awareness programs' }
      ],
      color: 'bg-blue-100'
    },
    {
      name: 'December',
      events: [
        { date: 1, title: 'World AIDS Day', description: 'Health awareness' },
        { date: 3, title: 'International Day of Persons with Disabilities', description: 'Adaptive fitness programs' },
        { date: 12, title: 'Universal Health Coverage Day', description: 'Special programs' }
      ],
      color: 'bg-green-100'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">2025 Wellness Calendar</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {months.map((month, index) => (
            <div
              key={index}
              onClick={() => setSelectedMonth(month)}
              className={`${month.color} p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1`}
            >
              <h2 className="text-xl font-semibold text-gray-800">{month.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{month.events.length} events</p>
            </div>
          ))}
        </div>

        {selectedMonth && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-600">{selectedMonth.name} Events</h2>
                  <button
                    onClick={() => setSelectedMonth(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {selectedMonth.events.map((event, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-600 text-white rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                          <span className="text-lg font-bold">{event.date}</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                          <p className="text-gray-600 mt-1">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}