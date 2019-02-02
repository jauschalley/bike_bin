class Bike < ApplicationRecord
  has_one :post, as: :postable
  accepts_nested_attributes_for :post
end
