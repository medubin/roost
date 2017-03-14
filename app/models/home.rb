class Home < ApplicationRecord
  validates :name, presence: true

  has_many :housemates

  has_many :users,
  through: :housemates


end
