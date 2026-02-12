// Generate placeholder images using canvas
export const generatePlaceholder = (width, height, text, bgColor = '#f1f5f9') => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  // Background
  ctx.fillStyle = bgColor
  ctx.fillRect(0, 0, width, height)
  
  // Text
  ctx.fillStyle = '#64748b'
  ctx.font = 'bold 24px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, width / 2, height / 2)
  
  return canvas.toDataURL()
}

// Dummy image URLs (using placeholder services)
export const dummyImages = {
  // Before images (plain product)
  before1: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop',
  before2: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop',
  before3: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop',
  
  // After images (on model)
  after1: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop',
  after2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop',
  after3: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop',
  
  // Gallery images
  gallery1: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop',
  gallery2: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop',
  gallery3: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=800&h=1000&fit=crop',
  gallery4: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=1000&fit=crop',
  gallery5: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop',
  gallery6: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1000&fit=crop',
  gallery7: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop',
  gallery8: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop',
  
  // Use case images
  usecase1: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  usecase2: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
  usecase3: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
  usecase4: 'https://images.unsplash.com/photo-1558769132-92e717d613cd?w=800&h=600&fit=crop',
  
  // Testimonial images
  testimonial1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  testimonial2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  testimonial3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  
  // Integration images
  integration1: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
  integration2: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
  integration3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  integration4: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
  integration5: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
  integration6: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  
  // How it works images
  step1: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop',
  step2: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=400&fit=crop',
  step3: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=400&fit=crop',
}
