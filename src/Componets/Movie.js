import React from 'react'
import './Component.css';
import { motion } from 'framer-motion';

const Movie = ({movie}) => {
  return (
    <motion.div 
        animate={{ opacity: 1, scale: 1 }}
        inherit={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        layout
    >
        <h2>{movie.title}</h2>
        <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} />
    </motion.div>
  )
}

export default Movie;