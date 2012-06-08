class Appearance < ActiveRecord::Base
  attr_accessible :card_id, :deck_id

  belongs_to :deck
  belongs_to :card

end
