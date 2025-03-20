import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
    >
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: color }}
      />
      
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div
            className="p-3 rounded-lg transition-all transform group-hover:scale-110"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="w-8 h-8" style={{ color }} />
          </div>
        </div>
        
        <h3 className="text-center font-merriweather text-lg font-bold mb-2" style={{ color }}>
          {title}
        </h3>
        
        <p className="text-center text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitCard; 