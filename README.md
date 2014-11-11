loopback-example-intermediate
=============================

LoopBack intermediate "golden path" example

#Model relations
Coffee Shop
  has many Review
  has many Reviewer
Reviewer
  has many Review defined by publisherId
Review
  belongs to Coffee Shop
