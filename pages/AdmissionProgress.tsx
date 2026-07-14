import React, { useEffect } from 'react';
import { Clock, GraduationCap, FileText, Wrench, HardHat, Building2, Droplet, Tractor } from 'lucide-react';
import admissionData from '../src/data/admission_progress.json';

const getSpecialtyIcon = (specialty: string) => {
  if (specialty.includes('5-04-0715-20')) return Wrench;
  if (specialty.includes('5-04-0732-01')) return HardHat;
  if (specialty.includes('5-04-0732-08')) return Building2;
  if (specialty.includes('5-04-0811-03')) return Droplet;
  if (specialty.includes('5-04-0812-01')) return Tractor;
  return GraduationCap;
};

const AdmissionProgress: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-500 max-w-6xl mx-auto px-1 sm:px-4">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-rose-50 rounded-2xl shrink-0 text-rose-600">
            <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-rose-500" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 font-display">
              Ход приема документов
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-1">
              Информация о ходе приема документов в реальном времени
            </p>
          </div>
        </div>

        <a 
          href="/downloads/abiturient/hod_priema.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-white border-2 border-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-xl hover:bg-slate-50 hover:border-rose-500 hover:text-rose-600 transition-all shadow-sm whitespace-nowrap text-sm"
        >
          <FileText className="w-4 h-4 mr-2 text-rose-500" />
          Официальный PDF
        </a>
      </div>

      {/* Info Warning Card */}
      <div className="mb-8 bg-white p-6 rounded-3xl shadow-sm border border-rose-100 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-500 via-accent-500 to-rose-500"></div>
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-rose-50 rounded-xl text-rose-600 shrink-0 mt-0.5">
            <Clock className="w-6 h-6 text-rose-500" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary-900 leading-tight">
              Последнее обновление данных
            </h3>
            <p className="text-slate-600 mt-2 text-sm md:text-base font-medium">
              Мониторинг обновлен: <span className="font-bold text-rose-600">{admissionData.lastUpdated.date}</span> в <span className="font-bold text-rose-600">{admissionData.lastUpdated.time}</span>. 
            </p>
          </div>
        </div>
      </div>

      {/* Tables Loop */}
      {admissionData.tables.map((table, tableIdx) => (
        <div key={tableIdx} className="mb-12">
          {/* Section Header */}
          <div className="bg-slate-900 text-white px-6 py-4 rounded-t-2xl border-b border-slate-800">
            <h3 className="text-lg md:text-xl font-bold font-display">
              {table.educationForm}
            </h3>

          </div>

          {/* DESKTOP TABLE VIEW (Visible on tablet & desktop) */}
          <div className="hidden md:block overflow-x-auto w-full border-x border-b border-slate-300 shadow-xl rounded-b-2xl bg-white custom-scrollbar">
            <table className="w-full text-center border-collapse min-w-[950px] text-sm">
              <thead className="bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-xs border-b border-slate-300">
                <tr>
                  <th rowSpan={2} className="p-3 border border-slate-300 align-middle text-left font-bold w-[340px]">
                    Специальность, квалификация
                  </th>
                  <th colSpan={2} className="p-3 border border-slate-300 font-bold align-middle">
                    Контрольные цифры приема<br/>(цифры приема)
                  </th>
                  <th colSpan={5} className="p-3 border border-slate-300 font-bold align-middle">
                    Средний балл документа<br/>об образовании, документа<br/>об обучении
                  </th>
                  <th rowSpan={2} className="p-3 border border-slate-300 font-bold align-middle w-28 whitespace-pre-wrap">
                    Подано заявлений, всего
                  </th>
                </tr>
                <tr className="text-xs bg-slate-50/50">
                  <th className="p-2 border border-slate-300 w-16">всего</th>
                  <th className="p-2 border border-slate-300 w-24">в том числе на условиях целевой подготовки</th>
                  
                  {/* 5 empty GPA sub-column headers matching the PDF template */}
                  {Array(5).fill(null).map((_, i) => (
                    <th key={i} className="p-2 border border-slate-300 w-12"></th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-800 font-medium">
                {table.rows.map((row, rowIdx) => {
                  const Icon = getSpecialtyIcon(row.specialty);
                  return (
                    <React.Fragment key={rowIdx}>
                      {/* Row 1: Specialty details & KCP */}
                      <tr className="bg-white hover:bg-slate-50/30 transition-colors">
                        <td className="p-4 border border-slate-300 text-left font-bold text-slate-900 leading-snug">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-slate-50 border border-slate-200 rounded-xl shrink-0 mt-0.5 text-slate-600">
                              <Icon className="w-5 h-5 text-slate-500" />
                            </div>
                            <div>
                              <div>{row.specialty}</div>
                              <div className="text-xs text-slate-500 mt-1 font-bold">квалификация: {row.qualification}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 border border-slate-300 font-bold text-slate-950 text-center">
                          {row.kcp.total}
                        </td>
                        <td className="p-2 border border-slate-300 text-slate-700 text-center">
                          {row.kcp.target || '—'}
                        </td>
                        {/* 5 empty cells for GPA columns */}
                        {Array(5).fill(null).map((_, i) => (
                          <td key={i} className="p-2 border border-slate-300 bg-slate-50/10"></td>
                        ))}
                        {/* Empty cell for total submitted column */}
                        <td className="p-2 border border-slate-300 bg-slate-50/10"></td>
                      </tr>

                      {/* Row 2: Total Submitted */}
                      <tr className="bg-slate-50/20 hover:bg-slate-50/60 transition-colors">
                        <td colSpan={3} className="p-3 border border-slate-300 text-left font-bold text-slate-800">
                          Подано заявлений от поступающих, из них:
                        </td>
                        {/* 5 empty cells for GPA columns */}
                        {Array(5).fill(null).map((_, i) => (
                          <td key={i} className="p-2 border border-slate-300 bg-white"></td>
                        ))}
                        {/* Empty cell for total count */}
                        <td className="p-2 border border-slate-300 bg-rose-50/5"></td>
                      </tr>

                      {/* Row 3: Benefits */}
                      <tr className="bg-white hover:bg-slate-50/30 transition-colors text-slate-600">
                        <td colSpan={3} className="p-3 border border-slate-300 text-left pl-8 text-sm font-semibold">
                          имеющие льготы на зачисление вне конкурса
                        </td>
                        {/* 5 empty cells for GPA columns */}
                        {Array(5).fill(null).map((_, i) => (
                          <td key={i} className="p-2 border border-slate-300"></td>
                        ))}
                        {/* Empty cell for benefits count */}
                        <td className="p-2 border border-slate-300 bg-slate-50/5"></td>
                      </tr>

                      {/* Row 4: Target */}
                      <tr className="bg-white hover:bg-slate-50/30 transition-colors text-slate-600">
                        <td colSpan={3} className="p-3 border border-slate-300 text-left pl-8 text-sm font-semibold">
                          на условиях целевой подготовки
                        </td>
                        {/* 5 empty cells for GPA columns */}
                        {Array(5).fill(null).map((_, i) => (
                          <td key={i} className="p-2 border border-slate-300"></td>
                        ))}
                        {/* Empty cell for target count */}
                        <td className="p-2 border border-slate-300 bg-slate-50/5"></td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARDS VIEW (Visible on mobile screens) */}
          <div className="block md:hidden border-x border-b border-slate-200 bg-slate-50/40 p-4 rounded-b-2xl space-y-4">
            {table.rows.map((row, rowIdx) => {
              const Icon = getSpecialtyIcon(row.specialty);
              return (
                <div key={rowIdx} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded-xl shrink-0 text-slate-600">
                      <Icon className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-snug text-sm">
                        {row.specialty}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 font-bold">
                        квалификация: {row.qualification}
                      </p>
                    </div>
                  </div>

                <hr className="border-slate-100" />

                {/* KCP Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">
                      КЦП Всего
                    </span>
                    <span className="text-sm font-extrabold text-slate-900">{row.kcp.total}</span>
                  </div>
                  <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase block leading-none mb-1">
                      КЦП Целевой
                    </span>
                    <span className="text-sm font-extrabold text-slate-900">{row.kcp.target || '—'}</span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Средний балл (5 empty boxes) */}
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase block mb-1.5">
                    Средний балл документа (5 полей)
                  </span>
                  <div className="flex gap-1.5">
                    {Array(5).fill(null).map((_, i) => (
                      <div key={i} className="flex-1 h-8 bg-slate-50/50 border border-slate-200 rounded-lg"></div>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Подано заявлений */}
                <div className="space-y-2">
                  <span className="text-[9px] text-slate-400 font-bold uppercase block mb-1">
                    Подано заявлений, всего
                  </span>
                  
                  <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-700">Подано заявлений от поступающих:</span>
                    <span className="w-10 h-7 bg-rose-50/30 border border-rose-100 rounded-lg flex items-center justify-center font-bold text-rose-600 text-xs"></span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl border border-slate-100">
                    <span className="text-xs font-semibold text-slate-600 pl-2">• из них льготники:</span>
                    <span className="w-10 h-7 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center font-semibold text-slate-700 text-xs"></span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl border border-slate-100">
                    <span className="text-xs font-semibold text-slate-600 pl-2">• на условиях целевой подготовки:</span>
                    <span className="w-10 h-7 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center font-semibold text-slate-700 text-xs"></span>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      ))}


    </div>
  );
};

export default AdmissionProgress;
